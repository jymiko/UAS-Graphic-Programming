Tree = function () {

    this.mesh = new THREE.Object3D();

    var matTreeLeaves = new THREE.MeshPhongMaterial( { color:Colors.green, shading:THREE.FlatShading});

    var geonTreeBase = new THREE.BoxGeometry( 10,20,10 );
    var matTreeBase = new THREE.MeshBasicMaterial( { color:Colors.brown});
    var treeBase = new THREE.Mesh(geonTreeBase,matTreeBase);
    treeBase.castShadow = true;
    treeBase.receiveShadow = true;
    this.mesh.add(treeBase);

    var geomTreeLeaves1 = new THREE.CylinderGeometry(1, 12*3, 12*3, 4 );
    var treeLeaves1 = new THREE.Mesh(geomTreeLeaves1,matTreeLeaves);
    treeLeaves1.castShadow = true;
    treeLeaves1.receiveShadow = true;
    treeLeaves1.position.y = 20
    this.mesh.add(treeLeaves1);

    var geomTreeLeaves2 = new THREE.CylinderGeometry( 1, 9*3, 9*3, 4 );
    var treeLeaves2 = new THREE.Mesh(geomTreeLeaves2,matTreeLeaves);
    treeLeaves2.castShadow = true;
    treeLeaves2.position.y = 40;
    treeLeaves2.receiveShadow = true;
    this.mesh.add(treeLeaves2);

    var geomTreeLeaves3 = new THREE.CylinderGeometry( 1, 6*3, 6*3, 4);
    var treeLeaves3 = new THREE.Mesh(geomTreeLeaves3,matTreeLeaves);
    treeLeaves3.castShadow = true;
    treeLeaves3.position.y = 55;
    treeLeaves3.receiveShadow = true;
    this.mesh.add(treeLeaves3);

}