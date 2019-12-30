'use strict'

// global vars
var MeHTML =
"<p>Hi there,</p> \
<br> \
<p> \
my name is Andreas and I am a software developer with a tendency towards C++, CG and AI.<br> \
Please make yourself at home and have a little look if you like. \
</p>";

var DoHTML =
"<p>What I Do </p> <br> \
<p> \
Below is a listing of some technologies I love and work with.<br> \
I store my projects on <a target=\"_blank\" href=\"https://github.com/langenhagen\">github.com/langenhagen</a>.<br> \
You can also look <a target=\"_blank\" href=\"https://langenhagen.github.io/expertises-gantt/\">here</a> for a list of what I did and do over the years.</p> \
</p> \
<br> \
    <p>Programming Languages</p> <br> \
     <p class=\"with_margin\"> \
        Bash<br> \
        C++<br> \
        C#<br> \
        Python<br> \
        GLSL<br> \
        HLSL<br> \
        </p> \
         <br> \
    <p>APIs</p> <br> \
    <p class=\"with_margin\"> \
        .NET<br> \
        Boost<br> \
        Flask<br> \
        Git<br> \
        Google Test<br> \
        OpenGL<br> \
        Pyramid<br> \
        Three.js<br> \
        </p> \
         <br> \
    <p>Technologies</p> <br> \
    <p class=\"with_margin\"> \
        Android<br> \
        Blender<br> \
        Doxygen<br> \
        CMake<br> \
        Gerrit<br> \
        Git<br> \
        Jira<br> \
        Linux<br> \
        Mac OS X<br> \
        Photoshop<br> \
        Processing<br> \
        Qt Creator<br> \
        Unity<br> \
        UML<br> \
        Visual Studio<br> \
        Windows<br> \
        Word<br> \
        Wings 3D<br> \
        Xcode<br> \
        </p> \
     <br> \
    <p>Buzzwords</p> <br> \
    <p class=\"with_margin\"> \
        Design Patterns, Kaizen, Software Architecture, Multi-Threading, UI, Best Practices, Agile, Clean Code, Simplicity \
    </p> \
    ";

var WantHTML =
"<p>What I Want To Do</p> \
<br> \
<p class=\"with_margin\"> \
- write C++<br> \
- write Python<br> \
- write C#<br> \
- automate & streamline Processes<br> \
- improve Code Quality<br> \
- program Shaders<br> \
- program Neural Networks<br> \
- work in Machine Learning<br> \
- work in Computer Graphics<br> \
- architect reusable & scalable Software<br> \
- employ Parallelism<br> \
- create Atmosphere<br> \
- work on Sustainability Projects<br> \
- work on Cutting Edge Videogames<br> \
- high Performance Stuff<br> \
- combine Mental and Physical Work<br> \
</p>";

var BscHTML =
"<p>Bachelor's Thesis</p> \
</p> \
<p class=\"with_margin\"> \
For my Bachelor's Thesis I implemented a three-dimensional user interface that allowed to control a smart home with a computer or tablet. \
Thanks to Professor Sahin Albayrak and our team at DAI Laboratory (<a target=\"_blank\" href=\"http://dai-labor.de\">dai-labor.de</a>) \
at Technical University Berlin \
I got a backend and a real smart home to try things out. This work was lots of fun. UI widgets, composition, implementation, and even the 3d-modelling \
were all part of my work. And hey, you can change skins of the widgets :D \
<br> <br> \
You can find my Bachelor's Thesis <a target=\"_blank\" href=\"http://langenhagen.cc/res/Implementierung-eines-3D-User-Interfaces.pdf\">here</a> \
and the source code on <a target=\"_blank\" href=\"https://github.com/langenhagen/Bachelor-Thesis\">github.com/langenhagen/Bachelor-Thesis</a>. <br> \
The thesis is written in German. \
</p>";

var MscHTML =
"<p>Master's Thesis</p> \
</p> \
<p class=\"with_margin\"> \
My Master's Thesis was about detection and clustering of the interesting parts of images in big image databases. \
Let's say you wanted to find within 10.000 satellite images of the big blue ocean the ones in which you could find a boat or an oil rig. \
The software could do that. Let's say you wanted to bring some structure into your image collection and sort it according to what is depicted on the images. \
The software is capable to do that as well. Well, to a certain degree. Thanks to my flatmate, who worked at that time at \
the Database and Information Management Department at TU Berlin (<a target=\"_blank\" href=\"http://www.dima.tu-berlin.de\">dima.tu-berlin.de</a>), \
I was the first guy to actually use the splendid OPTICS clustering algorithm to solve a computer vision problem - and that with quite okay-ish resuls :) \
<br> <br> \
You can find my Master's Thesis <a target=\"_blank\" href=\"http://langenhagen.cc/res/Unsupervised-Detection-of-Salient-Regions-in-Image-Databases.pdf\">here</a> \
and the source code on <a target=\"_blank\" href=\"https://github.com/langenhagen/Master-Thesis\">github.com/langenhagen/Master-Thesis</a>. \
</p>";

var VitaHTML =
" <a id=\"vita_link_left\" target=\"_blank\" href=\"./res/CV-de.pdf\">[DE]</a> <a id=\"vita_link_right\" target=\"_blank\" href=\"./res/CV-en.pdf\">[EN]</a>";

var AboutHTML =
"<br> \
<p style=\"padding: 34px;\"><br \
<br> \
<br> \
mail: andreas <squanch> langenhagen <wubbalubbadubdub> cc<br> \
<br> \
<a target=\"_blank\" href=\"https://github.com/langenhagen\">github.com/langenhagen</a><br> \
<a target=\"_blank\" href=\"https://repl.it/@barn07\">repl.it/@barn07</a><br> \
<br> \
<br> \
<br> \
<br> <a class=\"fineprint\">Stuff to mention:</a><br> \
<a class=\"fineprint\" target=\"_blank\" href=https://www.shadertoy.com/view/lslSRf>*c60 fullerene idea snitched from mplanck</a><br> \
<a class=\"fineprint\" target=\"_blank\" href=http://www.humus.name>*original cubemap by Humus</a><br> \
<br> <span class=\"fineprint\">v1.0.6</span><br> \
</p>";

var ContentDiv;
var dragablizer;

var scenes = {
    Lensflares:     updateLensflaresScene,
    Lavalamp:       updateLavaLampScene,
    Buckminster:    updateBuckminsterScene,
    Vogelkind:      updateVogelkindScene,
    SoapBubbles:    updateSoapBubbleScene,
};
ENGINE.currentUpdateFunction = scenes.Lensflares; // set also startInitialScene() accordingly!


// Lensflares Scene variables
var LensflareScene;
var LensflareCamera;
var LensflareVert;
var LensflareFrag;
var LensflareMaterial;

// Lavalamp Scene variables
var LavalampScene;
var LavalampCamera;
var LavalampSphere;
var LavalampComposer;
var LavalampVert;
var LavalampFrag;

// Buckminster Scene vars
// idea from https://www.shadertoy.com/view/lslSRf
var BuckminsterScene;
var BuckminsterCamera;
var BuckminsterFullerene;
var BuckminsterCubemap;
var sphereMaxY;

// Vogelkind Scene vars
var VogelkindScene;
var VogelkindCamera;
var VogelkindVogel;

// SoapBubbles Scene vars
// idea from http://mrdoob.github.io/three.js/examples/webgl_materials_shaders_fresnel.html
var SoapBubblesScene;
var SoapBubblesCamera;
var SoapBubblesCubemap;
var SoapBubblesBubbles;


function initAndStartWebGLApp() {
    if( !ENGINE.initWebGLOrShowErrorMsg())
        return;

    loadAssetsAndCreateScenes();

    window.addEventListener(
        'resize',
        function( evt) {
            var newAspect = window.innerWidth / window.innerHeight;

            LensflareCamera.aspect = newAspect;
            LavalampCamera.aspect = newAspect;
            BuckminsterCamera.aspect = newAspect;
            VogelkindCamera.aspect = newAspect;
            SoapBubblesCamera.aspect = newAspect;

            LensflareCamera.updateProjectionMatrix();
            LavalampCamera.updateProjectionMatrix();
            BuckminsterCamera.updateProjectionMatrix();
            VogelkindCamera.updateProjectionMatrix();
            SoapBubblesCamera.updateProjectionMatrix();

            ENGINE.renderer.setSize( window.innerWidth, window.innerHeight );
        },
        false
    );

    ContentDiv = $("#content");
    ContentDiv.html( MeHTML);
    dragablizer = new ObjectDragablizer(document.getElementById("content_container"), window);
}


// LOAD ASSETS ### LOAD ASSETS ### LOAD ASSETS ### LOAD ASSETS ### LOAD ASSETS ### LOAD ASSETS ### LOAD ASSETS ### LOAD ASSETS ###


function loadAssetsAndCreateScenes() {

    function loadLensflaresSceneAssets() {
        var get1 = $.get( "./glsl/simple.vert",     function( vert ) { LensflareVert = vert; });
        var get2 = $.get( "./glsl/swimmingColors.frag", function( frag ) { LensflareFrag = frag; });

        $.when( get1, get2).done( function() {
            createLensflaresScene();
            startInitialScene();
            var button = $("#me");
            button.click(function(){
                ENGINE.currentUpdateFunction = scenes.Lensflares;
                ContentDiv.html( MeHTML);
            });
            button.removeClass("blocked_link").addClass("active_link");

            button = $("#bsc");
            button.click(function(){
                ENGINE.currentUpdateFunction = scenes.Lensflares;
                ContentDiv.html( BscHTML);
            });
            button.removeClass("blocked_link").addClass("active_link");

            button = $("#msc");
            button.click(function(){
                ENGINE.currentUpdateFunction = scenes.Lensflares;
                ContentDiv.html( MscHTML);
            });
            button.removeClass("blocked_link").addClass("active_link");
        });
    }

    function loadLavalampSceneAssets() {
        var get1 = $.get( "./glsl/perlinWobbly.vert", function( vert ) { LavalampVert = vert; });
        var get2 = $.get( "./glsl/perlinWobbly.frag", function( frag ) { LavalampFrag = frag; });

        $.when( get1, get2).done( function() {
            createLavaLampScene();

            var button = $("#can");
            button.click(function(){
                ENGINE.currentUpdateFunction = scenes.Lavalamp;
                ContentDiv.html(DoHTML);

            });
            button.removeClass("blocked_link").addClass("active_link");
        });
    }

    function loadBuckminsterSceneAssets() {
        var cubeTextures = [
          './res/Vindelalven/posx.jpg',
          './res/Vindelalven/negx.jpg',
          './res/Vindelalven/posy.jpg',
          './res/Vindelalven/negy.jpg',
          './res/Vindelalven/posz.jpg',
          './res/Vindelalven/negz.jpg'
        ];

        BuckminsterCubemap = THREE.ImageUtils.loadTextureCube(cubeTextures);
        createBuckminsterScene();

        var button = $("#want");
        button.click(function(){
            ENGINE.currentUpdateFunction = scenes.Buckminster;
            ContentDiv.html( WantHTML);
        });
        button.removeClass("blocked_link").addClass("active_link");

    }

    function loadVogelkindSceneAssets() {
        var loader = new THREE.OBJLoader();
        loader.load(
            // resource URL
            "./res/Vogelkind.obj",
            // Function when resource is loaded
            function ( object ) {
                VogelkindVogel = object;
                createVogelkindScene();
                var button = $("#vita");
                button.click(function(){
                    ENGINE.currentUpdateFunction = scenes.Vogelkind;
                    ContentDiv.html( VitaHTML);
                });
                button.removeClass("blocked_link").addClass("active_link");
            }
        );
    }

    function loadSoapBubblesSceneAssets() {
        // TODO BUTTON FREISCHALTEN

        var cubeTextures = [
          './res/Vindelalven/posx.jpg',
          './res/Vindelalven/negx.jpg',
          './res/Vindelalven/posy.jpg',
          './res/Vindelalven/negy.jpg',
          './res/Vindelalven/posz.jpg',
          './res/Vindelalven/negz.jpg'
        ];

        SoapBubblesCubemap = THREE.ImageUtils.loadTextureCube(cubeTextures);
        createSoapBubblesScene();

        var button = $("#about");
        button.click(function(){
            ENGINE.currentUpdateFunction = scenes.SoapBubbles;
            ContentDiv.html( AboutHTML);
        });
        button.removeClass("blocked_link").addClass("active_link");
    }

    loadLensflaresSceneAssets();
    loadLavalampSceneAssets();
    loadBuckminsterSceneAssets();
    loadVogelkindSceneAssets();
    loadSoapBubblesSceneAssets();
}


function startInitialScene() {
    $("#status").remove();
    ENGINE.frameLoop();
}


// LENSFLARES ### LENSFLARES ### LENSFLARES ### LENSFLARES ### LENSFLARES ### LENSFLARES ### LENSFLARES ### LENSFLARES ### LENSFLARES


function createLensflaresScene() {
    var aspect = ENGINE.canvas.width / ENGINE.canvas.height;

    LensflareScene = new THREE.Scene();
    LensflareCamera = new THREE.OrthographicCamera( -1, 1, 1, -1, 1, 1000 );
    //LensflareCamera = new THREE.PerspectiveCamera(45, aspect, 1, 10000);
    LensflareCamera.position.set(0, 0, 100);
    LensflareCamera.lookAt( LensflareScene.position);
    LensflareScene.add(LensflareCamera);

    var width = 2;
    var geometry = new THREE.PlaneGeometry( width, width, 1 );

    var uniforms = {
        time:               { type: 'f', value: 0.0 },
        aspect:             { type: 'f', value: aspect },
    };

    LensflareMaterial = new THREE.ShaderMaterial({
        uniforms:     	uniforms,
        vertexShader:   LensflareVert,
        fragmentShader: LensflareFrag
    });
    var plane = new THREE.Mesh( geometry, LensflareMaterial );
    LensflareScene.add( plane );
}


function updateLensflaresScene() {
    var multiplier = Math.min( 0.0005, ENGINE.elapsedTime * 0.0000001);
    LensflareMaterial.uniforms["time"].value = multiplier * ENGINE.elapsedTime;
    ENGINE.renderer.render( LensflareScene, LensflareCamera );
}


// LAVALAMP ### LAVALAMP ### LAVALAMP ### LAVALAMP ### LAVALAMP ### LAVALAMP ### LAVALAMP ### LAVALAMP ### LAVALAMP ### LAVALAMP


function createLavaLampScene() {
    LavalampScene = new THREE.Scene();

    LavalampCamera = new THREE.PerspectiveCamera(45, ENGINE.canvas.width / ENGINE.canvas.height, 1, 10000);
    LavalampCamera.position.set(0, 0, 500);
    LavalampCamera.lookAt( LavalampScene.position);
    LavalampScene.add(LavalampCamera);

    var uniforms = {
        time:               { type: 'f', value: 0.0 },
        tiling:             { type: 'f', value: 0.0 },
        horizontalMouse:    { type: 'f', value: 0.0 },
        brightness:         { type: 'f', value: 0.0 }
    };

	var shaderMaterial = new THREE.ShaderMaterial({
		uniforms:     	uniforms,
		vertexShader:   LavalampVert,
		fragmentShader: LavalampFrag
	});

	var radius = 50, segments = 128, rings = 128;
	LavalampSphere = new THREE.Mesh( new THREE.SphereGeometry(radius, segments, rings),
                                     shaderMaterial);
	LavalampScene.add(LavalampSphere);

    LavalampComposer = new THREE.EffectComposer(ENGINE.renderer);

    var renderPass = new THREE.RenderPass(LavalampScene, LavalampCamera);
    LavalampComposer.addPass(renderPass);

    AdditiveLinearBlurHorizontalShader.uniforms["offsetPerPixel"].value = 1.0 / ENGINE.canvas.width;
    var additiveHorizontalBlurPass = new THREE.ShaderPass( AdditiveLinearBlurHorizontalShader);
    additiveHorizontalBlurPass.renderToScreen = true;
    LavalampComposer.addPass( additiveHorizontalBlurPass);
}


function updateLavaLampScene(){
    var brightness = Math.pow( 0.001 * ENGINE.elapsedTime, 8);
    var uniforms = LavalampSphere.material.uniforms;

    // Stage agnostics
    uniforms["time"].value = 0.0001 * ENGINE.elapsedTime;

    if( brightness < 1) {
        // Intro Stage
        uniforms["brightness"].value = brightness;
    }
    else {
        // Running Stage
        uniforms["brightness"].value = 1;

        var currentTilingValue = uniforms["tiling"].value;
        var targetTilingValue = Math.min( ENGINE.canvas.height, ENGINE.mouseY) * 0.0005;
        var tilingChange = ENGINE.msSinceLastFrame * 0.00005;
        if( currentTilingValue > targetTilingValue)
            tilingChange = -tilingChange;

        uniforms["tiling"].value += tilingChange;
        LavalampSphere.rotateY( 0.0002 * ENGINE.msSinceLastFrame);

        LavalampComposer.render(ENGINE.msSinceLastFrame); //parameter must be set with render
    }
}


// BUCKMINSTER ### BUCKMINSTER ### BUCKMINSTER ### BUCKMINSTER ### BUCKMINSTER ### BUCKMINSTER ### BUCKMINSTER ### BUCKMINSTER


function createBuckminsterScene() {
    BuckminsterScene = new THREE.Scene();
    BuckminsterScene.fog = new THREE.Fog( 0x000000, 800, 1250 );

    BuckminsterCamera = new THREE.PerspectiveCamera(60, ENGINE.canvas.width / ENGINE.canvas.height, 10, 10000);
    BuckminsterCamera.position.set(0, 300, -1000);
    BuckminsterCamera.lookAt( BuckminsterScene.position);
    BuckminsterScene.add(BuckminsterCamera);

    var light = new THREE.PointLight( 0xffffff );
    light.position.set( 1000, 800, -500 );
    BuckminsterScene.add( light );

    createFullerene();
}


function updateBuckminsterScene() {
    // rotate around global x axis
    var q = new THREE.Quaternion();
    q.setFromAxisAngle( new THREE.Vector3(1,0,0), ENGINE.mouseOffsetY * 0.0005);
    BuckminsterFullerene.quaternion.multiplyQuaternions( q, BuckminsterFullerene.quaternion );

    BuckminsterFullerene.rotateY( 0.0002 * ENGINE.msSinceLastFrame - ENGINE.mouseOffsetX * 0.0006);

    var spheres = BuckminsterScene.getObjectByName( "spheres").children;
    var timingFactor = ((ENGINE.elapsedTime * 0.004) % 10) * 0.1; // [0,1]
    var mousePosY = ENGINE.mouseY / ENGINE.canvas.height;     // [0,1]

    for( var i=0; i<spheres.length; ++i) {
        var sphere = spheres[i];

        // mouse-dependent scaling
        var normalizedSpherePos = (sphere.position.y) / (2 * sphereMaxY) + 0.5; // [0,1] 1: top, 0: bottom
        var inverseDiff = 1 - Math.abs( mousePosY - normalizedSpherePos); // [0,1]

        var timeDependentScaling = Math.sin( -Math.abs( timingFactor) * 2 * Math.PI - normalizedSpherePos * (3 + 0.1*i)) * 0.5 + 0.5;
        var scale = Math.max(0, (Math.sin( inverseDiff * Math.PI - Math.PI/2) + 1) * 0.5 + 1.6 * timeDependentScaling + 0.2);

        sphere.scale.set( scale, scale, scale);
    }
    ENGINE.renderer.render( BuckminsterScene, BuckminsterCamera );
}


// VOGELKIND ### VOGELKIND ### VOGELKIND ### VOGELKIND ### VOGELKIND ### VOGELKIND ### VOGELKIND ### VOGELKIND ### VOGELKIND ### VOGELKIND


function createVogelkindScene() {

    VogelkindScene = new THREE.Scene();

    VogelkindCamera = new THREE.PerspectiveCamera(45, ENGINE.canvas.width / ENGINE.canvas.height, 1, 10000);
    VogelkindCamera.position.set(0, 0, 1000);
    VogelkindCamera.lookAt( VogelkindScene.position);
    VogelkindScene.add(VogelkindCamera);

    var light = new THREE.PointLight( 0xffffff );
    light.position.set( 1000, 800, -500 );
    VogelkindScene.add( light );

    var material = new THREE.MeshPhongMaterial(
         { color: 0xFFFFFF, emissive: 0x000000, specular: 0xffffff, shininess: 10,
           envMap: BuckminsterCubemap, reflectivity: 0.9, refractionRatio: 0.999,
           shading: THREE.SmoothShading, blending: THREE.MultiplyBlending, wireframe: false } );

    VogelkindVogel.scale.set( 50, 50, 50);
    VogelkindVogel.position.set( 0, 75, 0);
    for( var i=0; i<VogelkindVogel.children.length; ++i) {
        var mesh = VogelkindVogel.children[i];
        mesh.material = material;
    }
    VogelkindScene.add( VogelkindVogel);
}


function updateVogelkindScene() {
    BuckminsterCubemap.mapping = THREE.CubeRefractionMapping;
    VogelkindVogel.rotateY( 0.0002 * ENGINE.msSinceLastFrame - ENGINE.mouseOffsetX * 0.002);
    ENGINE.renderer.render( VogelkindScene, VogelkindCamera );
}


// SOAPBUBBLES ### SOAPBUBBLES ### SOAPBUBBLES ### SOAPBUBBLES ### SOAPBUBBLES ### SOAPBUBBLES ### SOAPBUBBLES ### SOAPBUBBLES ###


function createSoapBubblesScene() {

    SoapBubblesScene = new THREE.Scene();

    SoapBubblesCamera = new THREE.PerspectiveCamera(50, ENGINE.canvas.width / ENGINE.canvas.height, 1, 1000000);
    SoapBubblesCamera.position.set(0, 0, 500);
    SoapBubblesCamera.lookAt( SoapBubblesScene.position);
    SoapBubblesScene.add(SoapBubblesCamera);

    var cubemapShader = THREE.ShaderLib["cube"];
    var cubeMapShaderUniforms = THREE.UniformsUtils.clone( cubemapShader.uniforms );
    cubeMapShaderUniforms['tCube'].value = SoapBubblesCubemap;
    var cubemapMaterial = new THREE.ShaderMaterial({
        fragmentShader: cubemapShader.fragmentShader,
        vertexShader:   cubemapShader.vertexShader,
        uniforms:       cubeMapShaderUniforms,
        depthWrite:     false,
        side:           THREE.DoubleSide
    });

    var skybox = new THREE.Mesh( new THREE.BoxGeometry( 100000, 100000, 100000, 1, 1, 1), cubemapMaterial );
    SoapBubblesScene.add( skybox );
    skybox.rotateX(100 );

    SoapBubblesBubbles = new THREE.Object3D();

    var radius = 120 , segments = 20, rings = 20;

    THREE.FresnelShader.uniforms["tCube"].value = SoapBubblesCubemap;
    THREE.FresnelShader.uniforms["mFresnelBias"].value = 0.1;

    var fresnelShaderMaterial = new THREE.ShaderMaterial({
		uniforms:     	THREE.FresnelShader.uniforms,
		vertexShader:   THREE.FresnelShader.vertexShader,
		fragmentShader: THREE.FresnelShader.fragmentShader,
	});


    for ( var i=0; i < 250; ++i) {
        var sphere = new THREE.Mesh( new THREE.SphereGeometry(
            radius + (Math.random()-0.5) * 50,
            segments,
            rings),
            fresnelShaderMaterial
        );
        SoapBubblesBubbles.add( sphere);
        sphere.direction = new THREE.Vector3();

        sphere.direction.set(
            (Math.random()-0.5)*3,
            (Math.random()-0.5)*10,
            (Math.random()-0.5)*0.2
        );

        sphere.position.set(
            (Math.random()-0.5)*6000,
            (Math.random()-0.5)*6000,
            Math.random()*4500 - 500
        );
    }
    SoapBubblesScene.add( SoapBubblesBubbles);
}


function updateSoapBubbleScene() {

    var mousePosX = ENGINE.mouseX / ENGINE.canvas.width;     // [0,1]
    var mousePosY = ENGINE.mouseY / ENGINE.canvas.height;    // [0,1]

    var targetCamPosX = -(mousePosX - 0.5) * 1000;
    var targetCamPosY = (mousePosY - 0.5) * 1000;
    var currentCamPosX = SoapBubblesCamera.position.x;
    var currentCamPosY = SoapBubblesCamera.position.y;

    var standardSpeedX = ENGINE.msSinceLastFrame * Math.abs( targetCamPosX - currentCamPosX ) * 0.01;
    var standardSpeedY = ENGINE.msSinceLastFrame * Math.abs( targetCamPosY - currentCamPosY ) * 0.01;

    var positionChangeX = Math.max( 0, Math.min( 100, standardSpeedX));
    var positionChangeY = Math.max( 0, Math.min( 100, standardSpeedY));

    SoapBubblesCamera.position.x += targetCamPosX < currentCamPosX ? -positionChangeX : positionChangeX;
    SoapBubblesCamera.position.y += targetCamPosY < currentCamPosY ? -positionChangeY : positionChangeY;

    SoapBubblesCamera.lookAt( SoapBubblesScene.position);

    var bubbles = SoapBubblesBubbles.children;

    for( var i=0; i<bubbles.length; ++i) {
        var sphere = bubbles[i];
        var pos = sphere.position;

        if( pos.x < -3100 || pos.x > 3100 ||
            pos.y < -3100 || pos.y > 3100 ||
            pos.z > 1000 || pos.z < -4000) {
            // passed outer bounds - reset
            setSoapBubbleDirectionAndPosition( sphere);

        /*
        } else if ( Math.random() < 0.001 ) {
            // randomly burst a bubble
            setSoapBubbleDirectionAndPosition( sphere);
        /**/
        } else {
            // normal movement
            var dir = sphere.direction;
            sphere.position.set( pos.x+dir.x, pos.y+dir.y, pos.z+dir.z);
        }
    }

    ENGINE.renderer.render( SoapBubblesScene, SoapBubblesCamera );
}


// HELPERS ### HELPERS ### HELPERS ### HELPERS ### HELPERS ### HELPERS ### HELPERS ### HELPERS ### HELPERS ### HELPERS ### HELPERS


function createPipe(v1, v2, thickness, radiusSegments, heightSegments, material ) {
    // edge from X to Y
    var direction = new THREE.Vector3().subVectors( v2, v1 ).normalize();
    var height = v1.distanceTo( v2);
    var pos = new THREE.Vector3( v1.x - (v1.x-v2.x)*0.5, v1.y - (v1.y-v2.y)*0.5, v1.z - (v1.z-v2.z)*0.5);
    var arrow = new THREE.ArrowHelper( direction, v1 );

    var geometry = new THREE.CylinderGeometry( thickness, thickness, height, radiusSegments, heightSegments, true /*open ended*/ );

    var mesh = new THREE.Mesh( geometry, material);

    mesh.rotation.copy( arrow.rotation);
    mesh.position.copy( pos);

    return mesh;
}


function createFullerene() {
    // c60 fullerene - what else ;)
    // pipe vars
    var thickness = .05, radiusSegments = 5, heightSegments = 1;

    var pipeMaterial = new THREE.MeshPhongMaterial( {
        color: 0xdddddd, emissive: 0x000000, specular: 0xCCCCCC, shininess: 60,
        envMap: BuckminsterCubemap, reflectivity: 0.9,
        shading: THREE.SmoothShading
    });

    // sphere vars
    var radius = .66 , segments = 16, rings = 16;
    var sphereColorMaterial = new THREE.MeshPhongMaterial({
        color: 0x999999, emissive: 0xff0085, specular: 0xffffff, shininess: 10,
        envMap: BuckminsterCubemap, reflectivity: 0.3,
        shading: THREE.SmoothShading, blending: THREE.MultiplyBlending, transparent: false, wireframe: false
    });

    BuckminsterFullerene = new THREE.Object3D();
    var grid = new THREE.Object3D();
    var spheres = new THREE.Object3D();
    grid.name = "grid";
    spheres.name = "spheres";

    var phi = 1.61803398875;    // = (1 + sqrt(5)) / 2;
    sphereMaxY = -(1 + 2 * phi);

    var nodes = [];
    nodes[0]  = new THREE.Vector3( +3 * phi, 0, +1 );            nodes[20] = new THREE.Vector3(+1, +3 * phi, 0);
    nodes[1]  = new THREE.Vector3(+3 * phi, 0, -1);              nodes[21] = new THREE.Vector3(+1, -3 * phi, 0);
    nodes[2]  = new THREE.Vector3(-3 * phi, 0, +1);              nodes[22] = new THREE.Vector3(-1, +3 * phi, 0);
    nodes[3]  = new THREE.Vector3(-3 * phi, 0, -1);              nodes[23] = new THREE.Vector3(-1, -3 * phi, 0);
    nodes[4]  = new THREE.Vector3(+(1 + 2* phi), +phi, +2);      nodes[24] = new THREE.Vector3(+2, +(1 + 2 * phi), +phi);
    nodes[5]  = new THREE.Vector3(+(1 + 2* phi), +phi, -2);      nodes[25] = new THREE.Vector3(+2, +(1 + 2 * phi), -phi);
    nodes[6]  = new THREE.Vector3(+(1 + 2* phi), -phi, +2);      nodes[26] = new THREE.Vector3(+2, -(1 + 2 * phi), +phi);
    nodes[7]  = new THREE.Vector3(+(1 + 2* phi), -phi, -2);      nodes[27] = new THREE.Vector3(+2, -(1 + 2 * phi), -phi);
    nodes[8]  = new THREE.Vector3(-(1 + 2* phi), +phi, +2);      nodes[28] = new THREE.Vector3(-2, +(1 + 2 * phi), +phi);
    nodes[9]  = new THREE.Vector3(-(1 + 2* phi), +phi, -2);      nodes[29] = new THREE.Vector3(-2, +(1 + 2 * phi), -phi);
    nodes[10] = new THREE.Vector3(-(1 + 2* phi), -phi, +2);      nodes[30] = new THREE.Vector3(-2, -(1 + 2 * phi), +phi);
    nodes[11] = new THREE.Vector3(-(1 + 2* phi), -phi, -2);      nodes[31] = new THREE.Vector3(-2, -(1 + 2 * phi), -phi);
    nodes[12] = new THREE.Vector3(+(2 + phi), +2 * phi, +1);     nodes[32] = new THREE.Vector3(+1, +(2 + phi), +2 * phi);
    nodes[13] = new THREE.Vector3(+(2 + phi), +2 * phi, -1);     nodes[33] = new THREE.Vector3(+1, +(2 + phi), -2 * phi);
    nodes[14] = new THREE.Vector3(+(2 + phi), -2 * phi, +1);     nodes[34] = new THREE.Vector3(+1, -(2 + phi), +2 * phi);
    nodes[15] = new THREE.Vector3(+(2 + phi), -2 * phi, -1);     nodes[35] = new THREE.Vector3(+1, -(2 + phi), -2 * phi);
    nodes[16] = new THREE.Vector3(-(2 + phi), +2 * phi, +1);     nodes[36] = new THREE.Vector3(-1, +(2 + phi), +2 * phi);
    nodes[17] = new THREE.Vector3(-(2 + phi), +2 * phi, -1);     nodes[37] = new THREE.Vector3(-1, +(2 + phi), -2 * phi);
    nodes[18] = new THREE.Vector3(-(2 + phi), -2 * phi, +1);     nodes[38] = new THREE.Vector3(-1, -(2 + phi), +2 * phi);
    nodes[19] = new THREE.Vector3(-(2 + phi), -2 * phi, -1);     nodes[39] = new THREE.Vector3(-1, -(2 + phi), -2 * phi);

    nodes[40] = new THREE.Vector3(0, +1, +3 * phi);
    nodes[41] = new THREE.Vector3(0, +1, -3 * phi);
    nodes[42] = new THREE.Vector3(0, -1, +3 * phi);
    nodes[43] = new THREE.Vector3(0, -1, -3 * phi);
    nodes[44] = new THREE.Vector3(+phi, +2, +(1 + 2 * phi));
    nodes[45] = new THREE.Vector3(+phi, +2, -(1 + 2 * phi));
    nodes[46] = new THREE.Vector3(+phi, -2, +(1 + 2 * phi));
    nodes[47] = new THREE.Vector3(+phi, -2, -(1 + 2 * phi));
    nodes[48] = new THREE.Vector3(-phi, +2, +(1 + 2 * phi));
    nodes[49] = new THREE.Vector3(-phi, +2, -(1 + 2 * phi));
    nodes[50] = new THREE.Vector3(-phi, -2, +(1 + 2 * phi));
    nodes[51] = new THREE.Vector3(-phi, -2, -(1 + 2 * phi));
    nodes[52] = new THREE.Vector3(+2 * phi, +1, +(2 + phi));
    nodes[53] = new THREE.Vector3(+2 * phi, +1, -(2 + phi));
    nodes[54] = new THREE.Vector3(+2 * phi, -1, +(2 + phi));
    nodes[55] = new THREE.Vector3(+2 * phi, -1, -(2 + phi));
    nodes[56] = new THREE.Vector3(-2 * phi, +1, +(2 + phi));
    nodes[57] = new THREE.Vector3(-2 * phi, +1, -(2 + phi));
    nodes[58] = new THREE.Vector3(-2 * phi, -1, +(2 + phi));
    nodes[59] = new THREE.Vector3(-2 * phi, -1, -(2 + phi));

    var connections = [
        [ 0,  1],       [ 8, 56],       [34, 46],       [25, 33],       [20, 24],
        [16, 17],       [11, 59],       [32, 44],       [31, 39],       [20, 25],
        [52, 54],       [15, 27],       [39, 51],       [11, 19],       [ 0,  4],
        [20, 22],       [13, 25],       [38, 50],       [51, 59],       [21, 26],
        [33, 37],       [ 6, 54],       [33, 45],       [30, 38],       [ 2,  8],
        [34, 38],       [17, 29],       [36, 48],       [26, 34],       [ 0,  6],
        [18, 19],       [ 4, 52],       [24, 32],       [49, 57],       [ 2, 10],
        [ 2,  3],       [14, 26],       [45, 53],       [50, 58],       [43, 47],
        [21, 23],       [19, 31],       [5,  13],       [ 8, 16],       [40, 44],
        [35, 39],       [ 7, 55],       [46, 54],       [ 6, 14],       [40, 48],
        [57, 59],       [ 9, 57],       [47, 55],       [10, 18],       [43, 51],
        [12, 13],       [16, 28],       [48, 56],       [ 9, 17],       [23, 31],
        [32, 36],       [18, 30],       [27, 35],       [ 1,  5],       [41, 45],
        [14, 15],       [10, 58],       [7,  15],       [ 1,  7],       [41, 49],
        [53, 55],       [12, 24],       [29, 37],       [22, 28],       [23, 30],
        [56, 58],       [ 5, 53],       [4,  12],       [21, 27],       [22, 29],
        [40, 42],       [35, 47],       [44, 52],       [ 3,  9],       [42, 46],
        [41, 43],       [37, 49],       [28, 36],       [ 3, 11],       [42, 50]
    ];

    for ( var i=0; i<connections.length; ++i) {
        var c = connections[i];
        var pipe = createPipe( nodes[c[0]], nodes[c[1]], thickness, radiusSegments, heightSegments, pipeMaterial );
        grid.add(pipe);
    }

    for ( var i=0; i< nodes.length; ++i) {
        var sphere = new THREE.Mesh( new THREE.SphereGeometry( radius, segments, rings), sphereColorMaterial);
        sphere.position.copy( nodes[i]);
        spheres.add( sphere);
    }

    BuckminsterFullerene.add( grid);
    BuckminsterFullerene.add( spheres);

    var scale = 40;
    BuckminsterScene.add( BuckminsterFullerene);

    BuckminsterFullerene.scale.set( scale, scale, scale);
}


function setSoapBubbleDirectionAndPosition( bubble) {
    bubble.direction.set( (Math.random()-0.5)*3, (Math.random()-0.5)*10, (Math.random()-0.5)*0.2 );

    var strongestDirection = Math.abs(bubble.direction.x) > Math.abs(bubble.direction.y) ? 'x' : 'y';
    var startPosX, startPosY, startPosZ;

    if( strongestDirection === 'x') {
        startPosX = bubble.direction.x > 0 ? -3000 : 3000;
        startPosY = (Math.random()-0.5)*3000;
    } else /* === 'y'*/ {
        startPosX = (Math.random()-0.5)*3000;
        startPosY = bubble.direction.x > 0 ? -3000 : 3000;
    }

    startPosZ = Math.random()*4500 - 4000;
    bubble.position.set( startPosX, startPosY, startPosZ);
}
