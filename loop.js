outer: for(let i=1;i<=5;i++){   //  outer is the label here
    document.write(i);
    document.write('<br>');

    inner: for(let j=1;j<3;j++){
        if(i==2){
            break outer;
        }
        document.write("SATYARTH");
        document.write('<br>');

    }
}