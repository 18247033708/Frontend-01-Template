import { cubicBezier } from './cubicBezier'



export class Timeline{
    constructor(config){
        this.animations = new Set();
        this.addTimes = new Map();
        this.finishedAnimations = new Set();
        this.requestId = null;
        this.state = "inited";
        this.playRate = (config && config.playRate) !== void 0 ? config.playRate : 1;
    }
    tick(){
        let t = Date.now() - this.startTime;
        console.log(t)
        //let animations = this.animations.filter(animation => !animation.finished); // 筛选出动画队列里还未执行完成的动画

        for(let animation of this.animations){ // 只循环未完成的动画
            
            let {object, property, template, duration, delay, timingFunction} = animation;

            let addTime = this.addTimes.get(animation);

            t *= Math.abs(this.playRate); // 增加速度选项

            if(t < delay + addTime) // 当t还没到delay和addTime开始的时候，否则progress就会负数
                continue;

            let progression = timingFunction((t - delay - addTime) / duration); 
            // progression是过程百分比（0-1），timingFunction函数是根据时间进行的百分比
            if(t > duration + delay + addTime){
                progression = 1; // 当走完duration时，强制progression设为1，也就是到达end值
                //animation.finished = true;
                this.animations.delete(animation);
                this.finishedAnimations.add(animation);
            }

            let value = animation.valueFromProgression(progression, this.playRate);
            //let value = start + progression * (end - start);
            // 最后的值是起始值加过程量，过程量则为过程比乘以全过程量

            object[property] = template(value);
            // 经过模板函数处理，如300被转换为translate(300px)，以便符合transform的值的格式
        }
        if(this.animations.size) // animations队列里不为空的话就继续tick，为空就没有必要继续tick了，减少性能损耗
            this.requestId = requestAnimationFrame(() => this.tick());
        else
            this.requestId = null;
        /* 直接用箭头函数不需要bind this
        requestAnimationFrame(() => this.tick());
        requestAnimationFrame(function(){
            this.tick();
        }.bind(this));
        */
    }

    start(){
        if(this.state !== "inited")
            return;
        this.startTime = Date.now();
        this.tick();
        this.state = "playing";
    }

    pause(){
        if(this.state !== "playing")
            return;
        this.state = "paused";
        this.pauseTime = Date.now();
        if(this.requestId !== null){
            cancelAnimationFrame(this.requestId);
            this.requestId = null;
        }
    }

    resume(){
        if(this.state !== "paused")
            return;
        this.state = "playing";
        this.startTime += Date.now() - this.pauseTime; 
        // 暂停后到恢复之间的时间间隔 加上 原来的startTime 就是新的startTime，
        // 其实相当于startTime这个时间戳向前移动了一段时间
        this.tick();
    }

    reset(){
        if(this.state === "playing")
            this.pause();
        //this.animations.forEach(animation => animation.finished = false);
        this.animations.clear();
        this.finishedAnimations.clear();
        this.addTimes.clear();
        this.requestId = null;
        this.state = "playing";
        this.startTime = Date.now();
        this.pauseTime = null;
        this.tick();
    }

    restart(){
        if(this.state === "playing")
            this.pause();
        //this.animations.forEach(animation => animation.finished = false);
        this.finishedAnimations.forEach(animation => this.animations.add(animation));
        this.finishedAnimations.clear();

        this.requestId = null;
        this.state = "playing";
        this.startTime = Date.now();
        this.pauseTime = null;
        this.tick();
    }

  
    add(animation, addTime){
        this.animations.add(animation);
        if(this.state == "playing" && this.requestId === null)
            this.tick();

        //animation.finished = false;
        if(this.state == "playing")
            this.addTimes.set(animation, addTime !== void 0 ? addTime : Date.now() - this.startTime);
            //animation.addTime = addTime !== void 0 ? addTime : Date.now() - this.startTime;
        else
            this.addTimes.set(animation, addTime !== void 0 ? addTime : 0)
            //animation.addTime = addTime !== void 0 ? addTime : 0;
    }
}
export class Animation{
    constructor(object, property, start, end, duration, delay, timingFunction, template){
        this.object = object;
        this.property = property;
        this.template = template || (v => v);
        this.start = start;
        this.end = end;
        this.duration = duration;
        this.delay = delay;
        this.timingFunction = timingFunction;
        // this.timingFunction = timingFunction || ((start, end) => {
        //     return t => start + t / duration * (end - start)
        // });
    }
    valueFromProgression(progression, playRate){
        let from, to;
        if(playRate >= 0)  // 添加倒放逻辑
            ({start: from, end: to} = this);
        else 
            ({start: to, end: from} = this);
            
        return from + progression * (to - from);
    }
}

class ColorAnimation {
    constructor(object, property, start, end, duration, delay, timingFunction, template) {
        this.object = object;
        this.property = property;
        this.template = template || ((v) => `rgba(${v.r},${v.g},${v.b},${v.a})`);
        this.start = start;
        this.end = end;
        this.duration = duration;
        this.delay = delay || 0;
        this.timingFunction = timingFunction;
    }

    valueFromProgress(progression) {
        return {
            r: this.start.r + progression * (this.end.r - this.start.r),
            g: this.start.g + progression * (this.end.g - this.start.g),
            b: this.start.b + progression * (this.end.b - this.start.b),
            a: this.start.a + progression * (this.end.a - this.start.a),
        }
    }
}