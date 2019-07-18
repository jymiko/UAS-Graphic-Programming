Flower = function () {

    this.mesh = new THREE.Object3D();

    var geomStem = new THREE.BoxGeometry( 5,50,5,1,1,1 );
    var matStem = new THREE.MeshPhongMaterial( { color:Colors.green, shading:THREE.FlatShading});
    var stem = new THREE.Mesh(geomStem,matStem);
    stem.castShadow = false;
    stem.receiveShadow = true;
    this.mesh.add(stem);


    var geomPetalCore = new THREE.BoxGeometry(10,10,10,1,1,1);
    var matPetalCore = new THREE.MeshPhongMaterial({color:Colors.yellow, shading:THREE.FlatShading});
    petalCore = new THREE.Mesh(geomPetalCore, matPetalCore);
    petalCore.castShadow = false;
    petalCore.receiveShadow = true;

    var petalColor = petalColors [Math.floor(Math.random()*3)];

    var geomPetal = new THREE.BoxGeometry( 15,20,5,1,1,1 );
    var matPetal = new THREE.MeshBasicMaterial( { color:petalColor});
    geomPetal.vertices[5].y-=4;
    geomPetal.vertices[4].y-=4;
    geomPetal.vertices[7].y+=4;
    geomPetal.vertices[6].y+=4;
    geomPetal.translate(12.5,0,3);

        var petals = [];
        for(var i=0; i<4; i++){	

            petals[i]=new THREE.Mesh(geomPetal,matPetal);
            petals[i].rotation.z = i*Math.PI/2;
            petals[i].castShadow = true;
            petals[i].receiveShadow = true;
        }

    petalCore.add(petals[0],petals[1],petals[2],petals[3]);
    petalCore.position.y = 25;
    petalCore.position.z = 3;
    this.mesh.add(petalCore);

}
