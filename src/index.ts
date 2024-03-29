function timeout(n: number) {
  return new Promise((res) => setTimeout(res, n));
}

export async function suma(a: number, b: number){
    await timeout(1000)
    return a + b 
}

export declare function suma2(a: number, b: number): Promise<number>;

;(async () => {
    console.log(await suma2(3, 4))
})()