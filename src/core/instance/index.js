import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

/* process对象提供一系列属性，用于返回系统信息。

process.pid：当前进程的进程号。
process.version：Node的版本，比如v0.10.18。
process.platform：当前系统平台，比如Linux。
process.title：默认值为“node”，可以自定义该值。
process.argv：当前进程的命令行参数数组。
process.env：指向当前shell的环境变量，比如process.env.HOME。
process.execPath：运行当前进程的可执行文件的绝对路径。
process.stdout：指向标准输出。
process.stdin：指向标准输入。
process.stderr：指向标准错误。 

*/
function Vue(options) {
    console.log(options);
    // console.log(process);
    console.log(this instanceof Vue);
    if (process.env.NODE_ENV !== 'production' &&
        !(this instanceof Vue)
    ) {
        warn('Vue is a constructor and should be called with the `new` keyword')
    }
    this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

//这个地方是入口，在html文件里的引用 new vue 的时候，就是走的这个地方
export default Vue