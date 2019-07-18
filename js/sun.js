Sun = function(){

    this.mesh = new THREE.Object3D();

    var sunGeom = new THREE.SphereGeometry( 300, 20, 10 );
    var sunMat = new THREE.MeshPhongMaterial({
        color: Colors.yellow,
        shading:THREE.FlatShading,
    });
    var sun = new THREE.Mesh(sunGeom, sunMat);
    //sun.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
    sun.castShadow = false;
    sun.receiveShadow = false;
    this.mesh.add(sun);
}