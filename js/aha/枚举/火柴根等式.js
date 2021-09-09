/*
 * @Author: Brightness
 * @Date: 2021-09-09 14:05:03
 * @LastEditors: Brightness
 * @LastEditTime: 2021-09-09 15:24:02
 * @Description:  枚举
 */
/*
    火柴棍等式
    拼接的数字需要的火柴根数
     1 =》6 ， 1 =》2 ， 2 =》5 ，3 =》5，4 =》4，5 =》5，6 =》6，7 =》3，8 =》7，9 =》6，+ =》2，= =》2
    使用火柴拼出 A+B=C 的等式，A 不等于 B 时，A+B=C,B+A=C，视为两种;非零数最高位不能时0；所有火柴都用上。
    如：14根火柴，可以拼出 1+0=1，0+1=1；
    求：m(m<=24)根可以拼出多少种，时间限定1秒
 */
/*
    分析：
        1、加号与等号各自需要两根火柴，所以用于拼数字的火柴最多20根；
        2、A 不等于 B 时，A+B=C,B+A=C，视为两种（A、B、C都大于0）；
        3、所有火柴都用上；
        4、只需枚举A、B即可，C可以计算得出；
        5、因为用于拼数字的火柴最多20根，拼出 1 所需的根数最少，所以在符合公式下,拼出的最大数值是 1111，枚举0~1111

 */

    let m = 24;//火柴的总根数
    let sum = 0;//用来计数的变
    let a,b,c;
    /**
     * 计算数字需要火柴根数
     *
     * @param int x 
     */
    function gen(x){
        let res = 0;//需要火柴根数
        let f = [6,2,5,5,4,5,6,3,7,6];//记录0~9每个数字需要火柴根数
        while (x>9) {//至少两位
            //每一位需要的根数
            res += f[x%10];
            x =Math.floor(x/10);//去掉x末尾数字
        }
        res += f[x];
        return res;
    }
    //结果
    if(m>0 && m<=24 && Number.isInteger(m)){
        for (let a = 0; a < 1112; a++) {
        
            for (let b = 0; b < 1112; b++) {
                c = a+b;//计算得出c
                if(gen(a)+gen(b)+gen(c) == m-4){
                    console.log(a+'+'+b+'='+c);
                    sum++;
                }
                
            }
        }
        console.log('种数：',sum);

    }else{
        console.log('m 不符规则');
    }
    
