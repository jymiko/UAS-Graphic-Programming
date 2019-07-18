var AirPlane = function() {
				
    this.mesh = new THREE.Object3D();

    // Create the cabin
    var geomCockpit = new THREE.BoxGeometry(80,50,50,1,1,1);
    var matCockpit = new THREE.MeshPhongMaterial({color:Colors.red, shading:THREE.FlatShading});
    geomCockpit.vertices[4].y-=10;
    geomCockpit.vertices[4].z+=20;
    geomCockpit.vertices[5].y-=10;
    geomCockpit.vertices[5].z-=20;
    geomCockpit.vertices[6].y+=30;
    geomCockpit.vertices[6].z+=20;
    geomCockpit.vertices[7].y+=30;
    geomCockpit.vertices[7].z-=20;
    var cockpit = new THREE.Mesh(geomCockpit, matCockpit);
    cockpit.castShadow = true;
    cockpit.receiveShadow = true;
    this.mesh.add(cockpit);
    
    // Create the engine
    var geomEngine = new THREE.BoxGeometry(20,50,50,1,1,1);
    var matEngine = new THREE.MeshPhongMaterial({color:Colors.white, shading:THREE.FlatShading});
    var engine = new THREE.Mesh(geomEngine, matEngine);
    engine.position.x = 40;
    engine.castShadow = true;
    engine.receiveShadow = true;
    this.mesh.add(engine);
    
    // Create the tail
    var geomTailPlane = new THREE.BoxGeometry(15,20,5,1,1,1);
    var matTailPlane = new THREE.MeshPhongMaterial({color:Colors.red, shading:THREE.FlatShading});
    var tailPlane = new THREE.Mesh(geomTailPlane, matTailPlane);
    tailPlane.position.set(-35,25,0);
    tailPlane.castShadow = true;
    tailPlane.receiveShadow = true;
    this.mesh.add(tailPlane);
    
    // Create the wing
    var geomSideWing = new THREE.BoxGeometry(40,4,150,1,1,1);
    var matSideWing = new THREE.MeshPhongMaterial({color:Colors.red, shading:THREE.FlatShading});

    var sideWingTop = new THREE.Mesh(geomSideWing, matSideWing);
    var sideWingBottom = new THREE.Mesh(geomSideWing, matSideWing);
    sideWingTop.castShadow = true;
    sideWingTop.receiveShadow = true;
    sideWingBottom.castShadow = true;
    sideWingBottom.receiveShadow = true;

    sideWingTop.position.set(20,12,0);
    sideWingBottom.position.set(20,-3,0);
    this.mesh.add(sideWingTop);
    this.mesh.add(sideWingBottom);

    var geomWindshield = new THREE.BoxGeometry(3,15,20,1,1,1);
    var matWindshield = new THREE.MeshPhongMaterial({color:Colors.white,transparent:true, opacity:.3, shading:THREE.FlatShading});;
    var windshield = new THREE.Mesh(geomWindshield, matWindshield);
    windshield.position.set(5,27,0);

    windshield.castShadow = true;
    windshield.receiveShadow = true;

    this.mesh.add(windshield);

    var geomPropeller = new THREE.BoxGeometry(20,10,10,1,1,1);
    geomPropeller.vertices[4].y-=5;
    geomPropeller.vertices[4].z+=5;
    geomPropeller.vertices[5].y-=5;
    geomPropeller.vertices[5].z-=5;
    geomPropeller.vertices[6].y+=5;
    geomPropeller.vertices[6].z+=5;
    geomPropeller.vertices[7].y+=5;
    geomPropeller.vertices[7].z-=5;
    var matPropeller = new THREE.MeshPhongMaterial({color:Colors.brown, shading:THREE.FlatShading});
    this.propeller = new THREE.Mesh(geomPropeller, matPropeller);
    this.propeller.castShadow = true;
    this.propeller.receiveShadow = true;


    var geomBlade1 = new THREE.BoxGeometry(1,100,10,1,1,1);
    var geomBlade2 = new THREE.BoxGeometry(1,10,100,1,1,1);
    var matBlade = new THREE.MeshPhongMaterial({color:Colors.brownDark, shading:THREE.FlatShading});
    
    var blade1 = new THREE.Mesh(geomBlade1, matBlade);
    blade1.position.set(8,0,0);
    blade1.castShadow = true;
    blade1.receiveShadow = true;

    var blade2 = new THREE.Mesh(geomBlade2, matBlade);
    blade2.position.set(8,0,0);
    blade2.castShadow = true;
    blade2.receiveShadow = true;
    this.propeller.add(blade1, blade2);
    this.propeller.position.set(50,0,0);
    this.mesh.add(this.propeller);

    var wheelProtecGeom = new THREE.BoxGeometry(30,15,10,1,1,1);
    var wheelProtecMat = new THREE.MeshPhongMaterial({color:Colors.white, shading:THREE.FlatShading});
    var wheelProtecR = new THREE.Mesh(wheelProtecGeom,wheelProtecMat);
    wheelProtecR.position.set(25,-20,25);
    this.mesh.add(wheelProtecR);

    var wheelTireGeom = new THREE.BoxGeometry(24,24,4);
    var wheelTireMat = new THREE.MeshPhongMaterial({color:Colors.brownDark, shading:THREE.FlatShading});
    var wheelTireR = new THREE.Mesh(wheelTireGeom,wheelTireMat);
    wheelTireR.position.set(25,-28,25);

    var wheelAxisGeom = new THREE.BoxGeometry(10,10,6);
    var wheelAxisMat = new THREE.MeshPhongMaterial({color:Colors.brown, shading:THREE.FlatShading});
    var wheelAxis = new THREE.Mesh(wheelAxisGeom,wheelAxisMat);
    wheelTireR.add(wheelAxis);

    this.mesh.add(wheelTireR);

    var wheelProtecL = wheelProtecR.clone();
    wheelProtecL.position.z = -wheelProtecR.position.z ;
    this.mesh.add(wheelProtecL);

    var wheelTireL = wheelTireR.clone();
    wheelTireL.position.z = -wheelTireR.position.z;
    this.mesh.add(wheelTireL);

    var wheelTireB = wheelTireR.clone();
    wheelTireB.scale.set(.5,.5,.5);
    wheelTireB.position.set(-35,-5,0);
    this.mesh.add(wheelTireB);

    var suspensionGeom = new THREE.BoxGeometry(4,20,4);
    suspensionGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0,10,0))
    var suspensionMat = new THREE.MeshPhongMaterial({color:Colors.red, shading:THREE.FlatShading});
    var suspension = new THREE.Mesh(suspensionGeom,suspensionMat);
    suspension.position.set(-35,-5,0);
    suspension.rotation.z = -.3;
    this.mesh.add(suspension);
};