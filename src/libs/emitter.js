// 想要 mitt 只匯入一次所以讓他單獨一個檔案
import mitt from 'mitt'

const emitter = mitt()
export default emitter
// import emitter from '@/libs/emitter'
