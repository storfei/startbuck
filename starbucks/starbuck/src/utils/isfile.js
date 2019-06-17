class Isfile {
    constructor(file,options){
        let i = file.type.indexOf("/")
        this.type = file.type.substr(i+1);
        this.size = file.size;
        this.options=options;
        // this.isType()
        // this.isSize()
    }
    isType(){
        let {types} = this.options
        return types.includes(this.type)
    }
    isSize(){
        let {size} = this.options
        return size < this.size
    }
}
export default Isfile
