export {};

export const toUrl =  function (text: String): String{
    let str = text.toString().toLowerCase();
    return str.replace(/\s+/g, '-');
}
