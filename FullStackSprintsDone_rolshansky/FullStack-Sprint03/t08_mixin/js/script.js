let houseMixin = {
  wordReplace (target, newWord){
      this.description = this.description.replace(target,newWord)
  },
  wordInsertAfter (target, ins){
      let result = this.description.split(' ');      
      result.splice(result.indexOf(target) + 1, 0, ins);       
      this.description = result.join(' ');
  },
  wordDelete (target){
      this.description = this.description.replace(target,' ')
  },
  wordEncrypt (){
      this.description = this.description.replace(/[A-Za-z]/g, function (enc) {
          return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(
              "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".indexOf(enc)
          );
      });
  },
  wordDecrypt() {
      this.description = this.description.replace(/[A-Za-z]/g, function (desc) {
          return "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".charAt(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(desc)
          );
      });
  }
}