import Axios from "axios";
/**
 * Girilen iki özelliğine göre akışkanın istenilen termodinamik özelliğini hesaplar
 * Arkaplanda CoolProp kütüphanesini kullanmaktadır (www.coolprop.org)
 * Örnek: =propsSI("T","P",101325.0,"Q",0.5,"Water")
 * @customfunction
 * @param p Hesaplanacak özellik.
 * @param p1 Ilk özelliğin ismi.
 * @param v1 Ilk özelliğin değeri (SI).
 * @param p2 Ikinci özelliğin ismi.
 * @param v2 Ikinci özelliğin değeri (SI).
 * @param f Akışkanın ismi.
 * @return Özelliğin değeri (SI).
 */
async function PropsSI(p: string, p1: string, v1: number, p2: string, v2: number, f: string): Promise<number> {
  const url =
    "https://propssiapp.azurewebsites.net/api/PyPropsSI?code=QEkV7KLzrU/MwXgi45zN15FWhEwHDFKygQFTmqwQ6ZVwbw2G7gutUQ==";
  const prop = {
    p: p,
    p1: p1,
    v1: v1,
    p2: p2,
    v2: v2,
    f: f
  };
  let res = await Axios.post(url, prop);
  if (res.status !== 200) throw new Error("Hata!");
  return res.data;
}
