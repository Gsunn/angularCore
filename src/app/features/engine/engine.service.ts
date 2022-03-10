import { ElementRef, Injectable, NgZone, OnDestroy } from '@angular/core';
import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module'
import { GUI } from 'dat.gui'

import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { DragControls } from 'three/examples/jsm/controls/DragControls'




@Injectable({
  providedIn: 'root'
})
export class EngineService implements OnDestroy {

  private canvas !: HTMLCanvasElement;
  
  private clientWidth:number = 0 
  private clientHeight: number = 0

  private camera !: any | THREE.Camera;
  private renderer!: any | THREE.Renderer;
  private scene !: any | THREE.Scene;
  private light !: any | THREE.AmbientLight;

  private raycaster = new THREE.Raycaster();
  private pointer = new THREE.Vector2()

  private outlinePass !: OutlinePass
  private composer !: EffectComposer

  private root !: any
  private selectedObjects: THREE.Object3D[] = [];

  private cube !: THREE.Mesh
  private frameId: number = 0

  private fan = {
    mainFan: new THREE.Mesh(), subFan: new THREE.Mesh()
  }

  constructor(private ngZone: NgZone) { 
      console.log('THREE.js v:',THREE.REVISION)
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  redererInit() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    })

    //  this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setSize(this.clientWidth, this.clientHeight)

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(0x000000, 0.0);  //trasparente
    this.renderer.shadowMap.enabled = true
    this.renderer.outputEncoding = THREE.sRGBEncoding; // gamma factor 2.2
    this.renderer.physicallyCorrectLights = true;


  }

  guiInit(): void {
    const gui = new GUI()
    // const cubeFolder = gui.addFolder('Cube')
    // cubeFolder.add(this.root.rotation, 'x', 0, Math.PI * 2)
    // cubeFolder.add(this.root.rotation, 'y', 0, Math.PI * 2)
    // cubeFolder.add(this.root.rotation, 'z', 0, Math.PI * 2)
    // cubeFolder.open()
    const cameraFolder = gui.addFolder('Camera')
    cameraFolder.add(this.camera.position, 'z', 0, 10)
    cameraFolder.open()
    const fanFolder = gui.addFolder('Fan')
    fanFolder.open()
    fanFolder.add(this.fan.mainFan.rotation, 'y', 0, 10, .001)
    fanFolder.add(this.fan.subFan.rotation, 'y', 0, 10, .001)
  }

  cameraInit(): void {

    const perpectiveCamera = {
      fov: 45,
      //  aspectRatio: window.innerWidth / window.innerHeight,
     aspectRatio: this.clientWidth / this.clientHeight,
      nearPlane: .1,
      farPlane: 1000
    };

    this.camera = new THREE.PerspectiveCamera(perpectiveCamera.fov,
      perpectiveCamera.aspectRatio,
      perpectiveCamera.nearPlane,
      perpectiveCamera.farPlane)

    this.camera.position.set(4, 2, 17)
    // Z is up for objects intended to be 3D printed.
    //this.camera.up.set(0, 0, 1);
    //camera.lookAt(scene.position);
    this.camera.updateProjectionMatrix();
    this.scene.add(this.camera)

  }

  controlsInit(el: any): void {
    // const dragControls = new DragControls([el], this.camera, this.renderer.domElement)
    // dragControls.addEventListener('dragstart', (event: any) => {
    //  // orbitControls.enabled = false
    //   event.object.material.opacity = 0.33
    //   console.log('in')
    // })

    // dragControls.addEventListener('dragend', (event: any) => {
    //   // orbitControls.enabled = true
    //   event.object.material.opacity = 1
    //    console.log('out')
    // })
  }

  lightsInit(): void {


    const mainLight = new THREE.AmbientLight('white')
    mainLight.position.set(0, 50, 0);
    this.scene.add(mainLight)


    this.light = new THREE.DirectionalLight("white", 8)
    this.light.position.set(0, 10, 0);
    this.light.castShadow = true;
    this.light.shadow.mapSize.width = 1024;  // default
    this.light.shadow.mapSize.height = 1024; // default
    this.light.shadow.camera.near = 0.01;       // default
    this.scene.add(this.light)


    let light2 = new THREE.DirectionalLight("white", 8)
    light2.position.set(0, -10, 0);
    light2.castShadow = true;
    light2.shadow.mapSize.width = 1024;  // default
    light2.shadow.mapSize.height = 1024; // default
    light2.shadow.camera.near = 0.01;       // default
    this.scene.add(light2)

    // let hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
    // this.scene.add(hemiLight);

    // let light2 = new THREE.AmbientLight("#fff", 10)
    // light2.position.set(2,5,30)
    // this.scene.add(light2)
  }

  createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    console.log('create scene')

    this.clientWidth = (document.querySelector('.egine-warpper') as HTMLElement).clientWidth
    this.clientHeight = (document.querySelector('.egine-warpper') as HTMLElement).clientHeight
    
    console.log('clientWidth:', this.clientWidth)
    console.log('clientHeight:', this.clientHeight)

    this.canvas = canvas.nativeElement

    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x8FBCD4);

    this.redererInit()
    this.cameraInit()
   // this.lightsInit()

    let geometry = new THREE.BoxGeometry(1, 2, 3);
    let material = new THREE.MeshBasicMaterial({ color: 0x8229CC });
    this.cube = new THREE.Mesh(geometry, material);
    // this.cube.position.set(-10,0,0)
    this.scene.add(this.cube);

    //     geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    // const cube2 = new THREE.Mesh( geometry, material );
    // this.scene.add( cube2 );
   // const orbitControls = new OrbitControls(this.camera, this.renderer.domElement);


   // this.renderer.render(this.scene, this.camera);

    // return
    //this.stlLoader()
    // this.camera.lookAt(this.root);


    geometry = new THREE.BoxGeometry( 1, 1, 5 );
    material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    const cube2 = new THREE.Mesh( geometry, material );
    this.scene.add( cube2 );


    // postprocessing

    this.composer = new EffectComposer(this.renderer);

    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    this.outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), this.scene, this.camera);
    this.composer.addPass(this.outlinePass);

    this.outlinePass.visibleEdgeColor.set('white');
    this.outlinePass.edgeStrength = 3;
    this.outlinePass.edgeGlow = 1.2;




    // const axesHelper = new THREE.AxesHelper( 5 );
    // this.scene.add( axesHelper );
    // this.scene.add(Stats)
    // this.renderer.render(this.scene, this.camera);
    // this.composer.render();
  }

  stlLoader(): void {

    const loader = new GLTFLoader().setPath('../../assets/');

    loader.load('../../assets/ninjaBot/wraith.gltf', (gltf) => {
      console.log(gltf)
      const root = gltf.scene
      root.scale.set(0.05, 0.05, 0.05)
      root.position.set(0,-2,0)
      this.scene.add(root);

    }, (xhr) => {
      console.log(xhr.loaded / xhr.total * 100 + " % loaded");
    }, (error)=>{
      console.log(error)
    });

    //const texture = new THREE.TextureLoader().load('../../assets/0/default_baseColor.png');
    // const material = new THREE.MeshBasicMaterial({  map : texture, transparent: true })
    //   console.log('TXT', texture)

    //loader.load('../../assets/untitled.gltf', (gltf) => {
/*
    loader.load('3/TheRocket.glb', (gltf) => {

      this.root = gltf.scene
      this.root.traverse((child: any) => {
        if (child instanceof THREE.Mesh) {
          console.log(child.name)
         // child.geometry.computeBoundingSphere();
         // scale = 0.2 * child.geometry.boundingSphere.radius;
          child.receiveShadow = false;
          child.castShadow = true;

        }


        // if (child instanceof THREE.Mesh) child.material.envMap = texture;
        //   if ( child.isMesh ) {
        //       child.geometry.center(); // center here
        //       console.log(child.geometry)
        // }

        // if (child.isGroup) {  }

        // if ((child as THREE.Mesh).isMesh) {
        //   child.castShadow = true
        //   //child.receiveShadow = true
        //   // const m = child as THREE.Mesh
        //   // m.receiveShadow = true
        //   // m.castShadow = true
        //   // ;(m.material as THREE.MeshStandardMaterial).flatShading = true
        //   // sceneMeshes.push(m)
        // }
        // if ((child as THREE.Light).isLight) {
        //     const l = child as THREE.Light
        //     l.castShadow = true
        //     l.shadow.bias = -0.003
        //     l.shadow.mapSize.width = 2048
        //     l.shadow.mapSize.height = 2048
        // }

      });

      // this.root.position.y = 1;
      // this.root.scale.divideScalar(scale);

      //this.root.scale.set(0.05, 0.05, 0.05)

      this.fan.mainFan = this.root.getObjectByName("VentMain")
      this.fan.subFan = this.root.getObjectByName("VentSub")
      this.guiInit()

      this.scene.add(this.root);

    }, (xhr) => {
      console.log(xhr.loaded / xhr.total * 100 + " % loaded");
    }, (error) => {
      console.log(error)
    });
*/
  }

  animation(): void {
    {
      console.log('animation')
      this.ngZone.runOutsideAngular(() => {
        if (document.readyState !== 'loading') {
          this.render()
        } else {
          window.addEventListener('DOMContentLoaded', () => {
            this.render()
          })
        }

        window.removeEventListener('resize', () => {
          this.resize()
        })

      })
    }
  }

  render(): void {
    this.frameId = requestAnimationFrame(() => {
      // console.log(this.frameId)
      // if (this.fan.mainFan) {
      //     this.fan.mainFan.rotation.y += 0.01
      //     this.fan.subFan.rotation.y -= 0.01
      // }

     this.raycaster.setFromCamera(this.pointer, this.camera);
      this.renderer.render(this.scene, this.camera);
       this.composer.render();
      this.render()
    })

  }

  resize(): void {
    
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( width, height );
    this.composer.setSize( width, height );
  }

  onPointerMove(event: any) {
     
    console.log(event.clientX + " " + event.clientY)
  
   
    // let width = (document.querySelector('.egine-warpper') as HTMLElement).offsetWidth
    // let height = (document.querySelector('.egine-warpper') as HTMLElement).offsetHeight


    // this.pointer.x = (event.clientX / width) * 2 - 1;
    // this.pointer.y = - (event.clientY / height) * 2 + 1;

    this.pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    this.pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    console.log(this.pointer.x + " " + this.pointer.y)


    // update the picking ray with the camera and pointer position
    this.raycaster.setFromCamera(this.pointer, this.camera);

    // calculate objects intersecting the picking ray
    // const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    const intersects = this.raycaster.intersectObjects(this.scene.children);
    console.log(intersects)

    console.log(this.pointer.x + " " + this.pointer.y)
    intersects.forEach((i: any) => {
      console.log('tocado tocado tocado')
      i.object.material.color.set( 0xff0000 );
      // console.log(i.object.name)
     // console.log(i.object.geometry)
      this.addSelectedObject( i );

     // this.outlinePass.selectedObjects = i.object;
    })

    if (intersects.length > 0) {
      console.log('touch')
      // const selectedObject = intersects[0].object;
      // this.addSelectedObject(selectedObject);
      // this.outlinePass.selectedObjects = this.selectedObjects;
    }

  }

  addSelectedObject(object: THREE.Object3D) {

    // this.selectedObjects = [];
    // this.selectedObjects.push(object);
    // console.log(this.selectedObjects)

  }


}
