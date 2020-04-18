import * as THREE from './libs/three'
import './js/libs/weapp-adapter'
import './js/libs/symbol'
import Main from './src/main'
window.THREE = THREE

new Main().init()
