export function Sticker(configuration){
    return function(target){
        target.prototype.stickers =  configuration.stickers
    }
}
export function HookLogger(configuration? ){
    
}