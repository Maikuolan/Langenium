// シーン生成
var scene = new THREE.Scene();
// カメラ生成
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 6;

// レンダラー生成
var renderer = new THREE.WebGLRenderer();
// レンダラーのサイズ指定
renderer.setSize( window.innerWidth, window.innerHeight );
// DOMを追加
document.getElementsByClassName( 'hero' )[0].appendChild( renderer.domElement );

controls = new THREE.OrbitControls( camera, renderer.domElement );
//controls.addEventListener( 'change', render ); // add this only if there is no animation loop (requestAnimationFrame)
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

// オフスクリーン用(Live2Dを描画)
var offScene1 = new THREE.Scene();
var offScene2 = new THREE.Scene();
var offScene3 = new THREE.Scene();
var offScene4 = new THREE.Scene();
var offRenderTarget1 = new THREE.WebGLRenderTarget(
    window.innerWidth,
    window.innerHeight,
    {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat
    }
);

var offRenderTarget2 = new THREE.WebGLRenderTarget(
    window.innerWidth,
    window.innerHeight,
    {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat
    }
);

var offRenderTarget3 = new THREE.WebGLRenderTarget(
    window.innerWidth,
    window.innerHeight,
    {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat
    }
);

var offRenderTarget4 = new THREE.WebGLRenderTarget(
    window.innerWidth,
    window.innerHeight,
    {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat
    }
);

// Live2Dモデルパス
var MODEL_PATH1 = "/universe/art/concept-art/Canon/Character%20models/";
var MODEL_JSON1 = "jack.model.json";
var MODEL_JSON2 = "jack-back.model.json";
var MODEL_JSON3 = "jack-side-left.model.json";
var MODEL_JSON4 = "jack-side-right.model.json";


// Live2Dモデル生成
var live2dmodel1 = new THREE.Live2DRender( renderer, MODEL_PATH1, MODEL_JSON1 );
var live2dmodel2 = new THREE.Live2DRender( renderer, MODEL_PATH1, MODEL_JSON2 );
var live2dmodel3 = new THREE.Live2DRender( renderer, MODEL_PATH1, MODEL_JSON3 );
var live2dmodel4 = new THREE.Live2DRender( renderer, MODEL_PATH1, MODEL_JSON4 );

var material = new THREE.SpriteMaterial( { map:offRenderTarget1.texture, side: THREE.DoubleSide, alphaTest: 0.5  } );
var plane = new THREE.Sprite( material );
plane.scale.set(6,6);
plane.material.transparent = true;
plane.position.set(-1, 0, -1);
scene.add( plane );

var material2 = new THREE.SpriteMaterial( { map:offRenderTarget2.texture, side: THREE.DoubleSide, alphaTest: 0.5  } );
var plane2 = new THREE.Sprite( material2 );
plane2.scale.set(6,6);
plane2.material.transparent = true;
plane2.position.set(1, 0, -1);
scene.add( plane2 );

var material3 = new THREE.SpriteMaterial( { map:offRenderTarget3.texture, side: THREE.DoubleSide, alphaTest: 0.5  } );
var plane3 = new THREE.Sprite( material3 );
plane3.scale.set(6,6);
plane3.material.transparent = true;
plane3.position.set(-3, 0, -1);
scene.add( plane3 );

var material4 = new THREE.SpriteMaterial( { map:offRenderTarget4.texture, side: THREE.DoubleSide, alphaTest: 0.5  } );
material4.map.repeat.set(-1, 1);
material4.map.offset.set(1, 0);
var plane4 = new THREE.Sprite( material4 );
plane4.scale.set(-6,-6);
plane4.material.transparent = true;
plane4.position.set(3, 0, -1);
scene.add( plane4 );

// ライト
var directionalLight = new THREE.DirectionalLight('#FFFFFF', 1);
directionalLight.position.set(0, 10, 10);
scene.add(directionalLight);

var directionalLight2 = new THREE.DirectionalLight('#FFFFFF', 1);
directionalLight2.position.set(0, 10, -10);
scene.add(directionalLight2);

var material2 = new THREE.MeshLambertMaterial( { color: 0x11CCFF } );
var sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 20, 10), material2);
sphere.position.set(0, -1, -10);
scene.add(sphere);

// リサイズへの対応
window.addEventListener('resize', function(){
    renderer.setSize( window.innerWidth, window.innerHeight );
    // オフスクリーンのレンダーターゲットもリサイズ
    offRenderTarget1.setSize( window.innerWidth, window.innerHeight );
    offRenderTarget2.setSize( window.innerWidth, window.innerHeight );
    offRenderTarget3.setSize( window.innerWidth, window.innerHeight );
    offRenderTarget4.setSize( window.innerWidth, window.innerHeight );
    // マウスドラッグ座標もリサイズ
    live2dmodel1.setMouseView(renderer);
    live2dmodel2.setMouseView(renderer);
    live2dmodel3.setMouseView(renderer);
    live2dmodel4.setMouseView(renderer);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}, false);

// コンテキストメニューの表示を阻止
document.addEventListener('contextmenu', function(e){
    // 右クリックの挙動を阻止する
    e.preventDefault();    
}, false);

// マウスクリック処理
document.addEventListener('mousedown', function(e){
    switch(e.button){
        case 0: // 左クリック
            // ランダムモーション指定
           // live2dmodel1.setRandomMotion();
            // 特定のモーション指定は、setMotion("ファイル名")を使う。
            // 例：live2dmodel.setMotion("Epsilon2.1_m_08.mtn");
            break;
        case 2: // 右クリック
            // ランダム表情切り替え
            //live2dmodel1.setRandomExpression();
            // 特定の表情切り替えは、setExpression("ファイル名")を使う。
            // 例：live2dmodel.setExpression("f04.exp.json");
            break;            
    }
});


/**
 * 描画処理
 */
var render = function () {
    requestAnimationFrame( render );

    var timer = Date.now() * 0.001;    

    sphere.position.x = ( Math.cos( -timer ) * 10 );

    // オフスクリーン切り替え描画
    renderer.render( offScene1, camera, offRenderTarget1 );
    
    live2dmodel1.draw();

    renderer.render( offScene2, camera, offRenderTarget2 );

    live2dmodel2.draw();

    renderer.render( offScene3, camera, offRenderTarget3 );

    live2dmodel3.draw();

    renderer.render( offScene4, camera, offRenderTarget4 );

    live2dmodel4.draw();

    
    // resetGLStateしないとgl.useProgramが呼ばれず以下のエラーになる
    // [error]location is not from current program
    renderer.resetGLState();

   // controls.update(); 
    // Mainシーンで描画
    renderer.render( scene, camera );
};

render();