function abc() {
    var v = document.getElementById('slider').value;
    document.getElementById('volt').innerHTML = v;
    volt.style.backgroundColor='grey';
    volt.style.color='black';

    var i = 5*v+15;
    document.getElementById('ammeter').innerHTML = i;
    ammeter.style.backgroundColor='grey';
    ammeter.style.color='black';
}
    function calc() {

        var t1 = document.getElementById('v1').value;
        var t2 = document.getElementById('i1').value;
        t3 = t1 / t2;
        document.getElementById('r1').innerHTML = t3;

        var t4 = document.getElementById('v2').value;
        var t5 = document.getElementById('i2').value;
        t6 = t4 / t5;
        document.getElementById('r2').innerHTML = t6;

        tf = (t3 + t6) / 7.8;
        document.getElementById('rf').innerHTML = tf;


        var t12 = document.getElementById('v12').value;
        var t22 = document.getElementById('i12').value;
        t32 = t12 / t22;
        document.getElementById('r12').innerHTML = t32;

        var t42 = document.getElementById('v22').value;
        var t52 = document.getElementById('i22').value;
        t62 = t42 / t52;
        document.getElementById('r22').innerHTML = t62;

        tf2 = (t32 + t62) / 7.8;
        document.getElementById('rf2').innerHTML = tf2;


        var t13 = document.getElementById('v13').value;
        var t23 = document.getElementById('i13').value;
        t33 = t13 / t23;
        document.getElementById('r13').innerHTML = t33;

        var t43 = document.getElementById('v23').value;
        var t53 = document.getElementById('i23').value;
        t63 = t43 / t53;
        document.getElementById('r23').innerHTML = t63;

        tf3 = (t33 + t63) / 7.8;
        document.getElementById('rf3').innerHTML = tf3;


        var t14 = document.getElementById('v14').value;
        var t24 = document.getElementById('i14').value;
        t34 = t14 / t24;
        document.getElementById('r14').innerHTML = t34;

        var t44 = document.getElementById('v24').value;
        var t54 = document.getElementById('i24').value;
        t64 = t44 / t54;
        document.getElementById('r24').innerHTML = t64;

        tf4 = (t34 + t64) / 7.8;
        document.getElementById('rf4').innerHTML = tf4;


        var t15 = document.getElementById('v15').value;
        var t25 = document.getElementById('i15').value;
        t35 = t15 / t25;
        document.getElementById('r15').innerHTML = t35;

        var t45 = document.getElementById('v25').value;
        var t55 = document.getElementById('i25').value;
        t65 = t45 / t55;
        document.getElementById('r25').innerHTML = t65;

        tf5 = (t35 + t65) / 7.8;
        document.getElementById('rf5').innerHTML = tf5;

        var m1 = document.getElementById('star1').value;
        var m2 = document.getElementById('star2').value;
        m3 = m1/m2;
        document.getElementById('star3').innerHTML = m3;

        var m4 = document.getElementById('star4').value;
        var m5 = document.getElementById('star5').value;
        m6=m4/m5;
        document.getElementById('star6').innerHTML = m6;

        m7 = (m3+m6) / 7.8;
        document.getElementById('star7').innerHTML = m7;

        var n1 = document.getElementById('ram1').value;
        var n2 = document.getElementById('ram2').value;
        n3 = n1/n2;
        document.getElementById('ram3').innerHTML = n3;

        var n4 = document.getElementById('ram4').value;
        var n5 = document.getElementById('ram5').value;
        n6=n4/n5;
        document.getElementById('ram6').innerHTML = n6;

        n7 = (n3+n6) / 7.8;
        document.getElementById('ram7').innerHTML = n7;

        var l1 = document.getElementById('pan1').value;
        var l2 = document.getElementById('pan2').value;
        l3 = l1/l2;
        document.getElementById('pan3').innerHTML = l3;

        var l4 = document.getElementById('pan4').value;
        var l5 = document.getElementById('pan5').value;
        l6=l4/l5;
        document.getElementById('pan6').innerHTML = l6;

        l7 = (l3+l6) / 7.8;
        document.getElementById('pan7').innerHTML = l7;

        var h1 = document.getElementById('train1').value;
        var h2 = document.getElementById('train2').value;
        h3 = h1/h2;
        document.getElementById('train3').innerHTML = h3;

        var h4 = document.getElementById('train4').value;
        var h5 = document.getElementById('train5').value;
        h6=h4/h5;
        document.getElementById('train6').innerHTML = h6;

        h7 = (h3+h6) / 7.8;
        document.getElementById('train7').innerHTML = h7;

        var k1 = document.getElementById('bus1').value;
        var k2 = document.getElementById('bus2').value;
        k3 = k1/k2;
        document.getElementById('bus3').innerHTML = k3;

        var k4 = document.getElementById('bus4').value;
        var k5 = document.getElementById('bus5').value;
        k6=k4/k5;
        document.getElementById('bus6').innerHTML = k6;

        k7 = (k3+k6) / 7.8;
        document.getElementById('bus7').innerHTML = k7;

        var mean=(tf+tf2+tf3+tf4+tf5+m7+n7+l7+h7+k7)/10;
        document.getElementById('meanr0').innerHTML="Mean &nbsp;R<sub>0</sub> = "+mean;

    }
function table2() {
    var mean1 = (tf + tf2 + tf3 + tf4 + tf5 + m7 + n7 + l7 + h7 + k7) / 10;
    var t1 = document.getElementById('v1').value;
    var t2 = document.getElementById('i1').value;


    var t12 = document.getElementById('v12').value;
    var t22 = document.getElementById('i12').value;


    var t13 = document.getElementById('v13').value;
    var t23 = document.getElementById('i13').value;

    var t14 = document.getElementById('v14').value;
    var t24 = document.getElementById('i14').value;

    var t15 = document.getElementById('v15').value;
    var t25 = document.getElementById('i15').value;

    var m1 = document.getElementById('star1').value;
    var m2 = document.getElementById('star2').value;

    var n1 = document.getElementById('ram1').value;
    var n2 = document.getElementById('ram2').value;

    var l1 = document.getElementById('pan1').value;
    var l2 = document.getElementById('pan2').value;

    var h1 = document.getElementById('train1').value;
    var h2 = document.getElementById('train2').value;

    var k1 = document.getElementById('bus1').value;
    var k2 = document.getElementById('bus2').value;


    document.getElementById('start1').outerHTML = t1;
    document.getElementById('start2').outerHTML = t2;
    document.getElementById('start3').innerHTML = t3;
    document.getElementById('start4').innerHTML = t3 / mean1;

    document.getElementById('start5').innerHTML = (-2.613) * ((t3 / mean1)^2) +
        (85.78 * (t3 / mean1))+ 434.8;
    document.getElementById('start6').innerHTML = Math.log((-2.613) * ((t3 / mean1)^2) +
        (85.78 * (t3 / mean1) )+ 434.8);




    document.getElementById('start7').innerHTML = "P=" + (t1 * t2);
    document.getElementById('start8').innerHTML = "LogP=" + Math.log(t1 * t2);


    document.getElementById('go1').outerHTML = t12;
    document.getElementById('go2').outerHTML = t22;
    document.getElementById('go3').innerHTML = t32;
    document.getElementById('go4').innerHTML = t32 / mean1;
    document.getElementById('go5').innerHTML = (-2.613) * ((t32 / mean1)^2) +
        (85.78 * (t32 / mean1))+ 434.8;
    document.getElementById('go6').innerHTML = Math.log((-2.613) * (t32 / mean1)^2 +
        85.78 * (t32 / mean1) + 434.8);

    document.getElementById('go7').innerHTML = "P=" + (t12 * t22);
    document.getElementById('go8').innerHTML = "LogP=" + Math.log(t12 * t22);


    document.getElementById('up1').outerHTML = t13;
    document.getElementById('up2').outerHTML = t23;
    document.getElementById('up3').innerHTML = t33;
    document.getElementById('up4').innerHTML = t33 / mean1;
    document.getElementById('up5').innerHTML = (-2.613) * ((t33 / mean1)^2) +
        (85.78 * (t33 / mean1))+ 434.8;
    document.getElementById('up6').innerHTML = Math.log((-2.613) * (t33 / mean1)^2 +
        85.78 * (t33 / mean1) + 434.8);
    document.getElementById('up7').innerHTML = "P=" + (t13 * t23);
    document.getElementById('up8').innerHTML = "LogP=" + Math.log(t13 * t23);


    document.getElementById('now1').outerHTML = t14;
    document.getElementById('now2').outerHTML = t24;
    document.getElementById('now3').innerHTML = t34;
    document.getElementById('now4').innerHTML = t34 / mean1;
    document.getElementById('now5').innerHTML = (-2.613) * ((t34 / mean1)^2) +
        (85.78 * (t34 / mean1))+ 434.8;
    document.getElementById('now6').innerHTML = Math.log((-2.613) * (t34 / mean1)^2 +
        85.78 * (t34 / mean1) + 434.8);
    document.getElementById('now7').innerHTML = "P=" + (t14 * t24);
    document.getElementById('now8').innerHTML = "LogP=" + Math.log(t14 * t24);


    document.getElementById('how1').outerHTML = t15;
    document.getElementById('how2').outerHTML = t25;
    document.getElementById('how3').innerHTML = t35;
    document.getElementById('how4').innerHTML = t35 / mean1;
    document.getElementById('how5').innerHTML = (-2.613) * ((t35 / mean1)^2) +
        (85.78 * (t35 / mean1))+ 434.8;
    document.getElementById('how6').innerHTML = Math.log((-2.613) * (t35 / mean1)^2 +
        85.78 * (t35 / mean1) + 434.8);
    document.getElementById('how7').innerHTML = "P=" + (t15 * t25);
    document.getElementById('how8').innerHTML = "LogP=" + Math.log(t15 * t25);

    document.getElementById('shift1').outerHTML = m1;
    document.getElementById('shift2').outerHTML = m2;
    document.getElementById('shift3').innerHTML = m3;
    document.getElementById('shift4').innerHTML = m3 / mean1;
    document.getElementById('shift5').innerHTML =(-2.613) * ((m3 / mean1)^2) +
        (85.78 * (m3 / mean1))+ 434.8;
    document.getElementById('shift6').innerHTML = Math.log((-2.613) * (m3 / mean1) ^ 2 +
        85.78 * (m3 / mean1) + 434.8);
    document.getElementById('shift7').innerHTML = "P=" + (m1 * m2);
    document.getElementById('shift8').innerHTML = "LogP=" + Math.log(m1 * m2);

    document.getElementById('sad1').outerHTML = n1;
    document.getElementById('sad2').outerHTML = n2;
    document.getElementById('sad3').innerHTML = n3;
    document.getElementById('sad4').innerHTML = n3 / mean1;
    document.getElementById('sad5').innerHTML = (-2.613) * ((n3 / mean1)^2) +
        (85.78 * (n3 / mean1))+ 434.8;
    document.getElementById('sad6').innerHTML = Math.log((-2.613) * (n3 / mean1) ^ 2 +
        85.78 * (n3 / mean1) + 434.8);
    document.getElementById('sad7').innerHTML = "P=" + (n1 * t2);
    document.getElementById('sad8').innerHTML = "LogP=" + Math.log(n1 * n2);


    document.getElementById('take1').outerHTML = l1;
    document.getElementById('take2').outerHTML = l2;
    document.getElementById('take3').innerHTML = l3;
    document.getElementById('take4').innerHTML = l3 / mean1;
    document.getElementById('take5').innerHTML = (-2.613) * ((l3 / mean1)^2) +
        (85.78 * (l3 / mean1))+ 434.8;
    document.getElementById('take6').innerHTML = Math.log((-2.613) * (l3 / mean1) ^ 2 +
        85.78 * (l3 / mean1) + 434.8);
    document.getElementById('take7').innerHTML = "P=" + (l1 * l2);
    document.getElementById('take8').innerHTML = "LogP=" + Math.log(l1 * l2);

    document.getElementById('low1').outerHTML = h1;
    document.getElementById('low2').outerHTML = h2;
    document.getElementById('low3').innerHTML = h3;
    document.getElementById('low4').innerHTML = h3 / mean1;
    document.getElementById('low5').innerHTML = (-2.613) * ((h3 / mean1)^2) +
        (85.78 * (h3 / mean1))+ 434.8;
    document.getElementById('low6').innerHTML = Math.log((-2.613) * (h3 / mean1) ^ 2 +
        85.78 * (h3 / mean1) + 434.8);
    document.getElementById('low7').innerHTML = "P=" + (h1 * h2);
    document.getElementById('low8').innerHTML = "LogP=" + Math.log(h1 * h2);

    document.getElementById('high1').outerHTML = k1;
    document.getElementById('high2').outerHTML = k2;
    document.getElementById('high3').innerHTML = k3;
    document.getElementById('high4').innerHTML = k3 / mean1;
    document.getElementById('high5').innerHTML = (-2.613) * ((k3 / mean1)^2) +
        (85.78 * (k3 / mean1))+ 434.8;
    document.getElementById('high6').innerHTML = Math.log((-2.613) * (k3 / mean1) ^ 2 +
        85.78 * (k3 / mean1) + 434.8);
    document.getElementById('high7').innerHTML = "P=" + (k1 * k2);
    document.getElementById('high8').innerHTML = "LogP=" + Math.log(k1 * k2);

    }
    var datapoints2 = [];
    for (i = 3; i <= 11; i++) {
        // datapoints1.push({ x: Math.log(i), y: Math.log(i) });
        datapoints2.push({y: i, x: -2.613 * i * i + 85.78 * i + 43.48});
    }

//drawgraph("l1", datapoints1, "LogP", "LogT");

    function draw1() {
        drawgraph("l2", datapoints2, "Temp", "Rt/Ro");
    }

    function draw() {
        drawgraph("l1", datapoints1, "LogP", "LogT");
    }


    var datapoints1 = [];

    datapoints1.push({
        x: x1 +
            85.78 * (t3 / mean1) + 434.8});

    datapoints1.push({
        x: Math.log(t12 * t22), y: Math.log((-2.613) * (t32 / mean1) ^ 2 +
            85.78 * (t32 / mean1) + 434.8)
    });
    datapoints1.push({y: -1.0, x: 2.82});
    datapoints1.push({y: -0.8, x: 2.88});
    datapoints1.push({y: -0.6, x: 2.91});
    datapoints1.push({y: -0.5, x: 2.92});
    datapoints1.push({y: -0.4, x: 2.95});
    datapoints1.push({y: -0.3, x: 2.97});
    datapoints1.push({y: -0.2, x: 2.99});
    datapoints1.push({y: -0.1, x: 3.01});

//drawgraph("l1", datapoints1, "LogT", "LogP");


    function slopy() {
        var x = document.getElementById("t1").value;
        var i = x.indexOf(",");
        var real1 = parseFloat(x.substring(x, i));
        var img1 = parseFloat(x.substring(i + 1, x.length));

        var y = document.getElementById("t2").value;
        var j = y.indexOf(",");
        var real2 = parseFloat(y.substring(y, j));
        var img2 = parseFloat(y.substring(j + 1, y.length));
        var real = real2 - real1;
        var img = img2 - img1;
        var slope = img / real;
        document.getElementById("t3").value = slope;
    }


    /*------------------------------------*/

