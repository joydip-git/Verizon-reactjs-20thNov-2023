class Sample{
    String data;
    public Sample(){}
    public Sample(String data){
        this.data = data
    }
    public void test(){
        int x = 200
    }
}

class App{
    public static void main(String[] args){
        Sample sample = new Sample('anil');
        sample.test()
    }
}