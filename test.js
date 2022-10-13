var assert = require('assert');
function somme(x,y){
  if(!x){
    x= 0;
  }
  if(!y){
    y= 0;
  }
  if(typeof x !== 'number' || typeof y !== 'number'){
    throw new Error('paramètre invalide');
  }
  let z = x + y;
  return z;
}

describe('Test pour la fonction somme', function () {
  describe('Fait la somme de deux variables', function () {
    it('Devrait renvoyer la somme de 1 plus 1', function () {
      assert.equal(somme(1,1),2);
    });
    it('Devrait tester que la fonction renvoie 0 si un  des parametres manque 10 et y = undefined', function () {
      assert.equal(somme(1),1);
    });
    it('Devrait renvoyer une avec le message d\'erreur "paramètre invalide"', function () {
      assert.throws(()=>somme(1,'test'), Error,'paramètre invalide' );
    });
  });
});
