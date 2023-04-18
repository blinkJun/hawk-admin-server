declare module 'svg-captcha' {
  interface Option {
    [propName:string]:any
  }
  interface Res {
    data:string,
    text:string
  }
  function create(option:Option):Res
}