Argo Parahyangan 7098
Ekonomi (C)
22:30
Gambir (GMR)
01:44 (+1 hari)
Bandung (BD)
3j 14m
IDR 732.400
sisa 24 kursi


#Get Train Seat Map

Parameters
date	Departure date	yyyy-mm-dd		true
train_id	Train ID that choosen by user	CHAR(~)		TRUE
subclass	Subclass from train that choosen by user	CHAR(~)		FALSE
token	for saving transaction that done by user	CHAR(128)		TRUE
org	Depart train station code	CHAR(3)		TRUE
dest	Arrival train station code	CHAR(3)		TRUE
Input
1
http://api-sandbox.tiket.com/general_api/get_train_seat_map?date=2015-06-30&train_id=A32&subclass=A&org=GMR&dest=BD&token=a86d0826af2e445be7c8ad36a5ab2b601358c040


#Output

NOTE for seat_map_subclass :
[[“EKSASL”,1,[[1,1,1,”A”,”A”,1],[2,1,2,”A”,”A”,0]]]
structure : [ baris, kolom, seat row, seat column, subclass, status(0 : kursi kosong, 1 : kursi sudah ditempati) ]

[[“EKSASL”,1
Wagon name : EKSASL
Wagon number : 1

[1,1,1,”A”,”A”,1]
Row : 1
Coloumn : 1
Seat number : 1, “A” (usually written 1A)
Subclass : A
Flag : 1 (1 = Filled, 0 = Empty)

[2,1,2,”A”,”A”,0]
Row : 2
Coloumn : 1
Seat number : 2, “A” (usually written 2A)
Subclass : A
Flag : 0 (1 = Filled, 0 = Empty)

—

#Note for seat_map_all :

Seat_map_all for all wagon layout (any subclass)
structure : [ seat row, seat column, subclass, status(0 : kursi kosong, 1 : kursi sudah ditempati) ]
[[“EKSASL”,1,[[1,”A”,”A”,1],[1,”B”,”A”,1],[1,”C”,”A”,0],
Wagon name : EKSASL
Wagon number : 1

[1,”A”,”A”,1]
Row : 1
Coloumn : A
Subclass : A
Status : Taken (availability = 1)



#JSON Format
1
{"diagnostic":{"status":200,"elapsetime":"0.1097","memoryusage":"4.62MB","unix_timestamp":1435115518,"confirm":"success","lang":"id","currency":"IDR"},"output_type":"json","result":{"train_schedule_id":"34049","departure_station":"GMR","departure_station_name":"Gambir","arrival_station":"BD","arrival_station_name":"Bandung","train_no":"A32","train_name":"Tiket.com Kuda Kencana","departure_date":"2015-06-30","departure_time":"05:30:00","arrival_date":"2015-06-30","arrival_time":"11:34:00","class_code":"E","class_id":"eks","class_detail":"eksekutif","subclass":"A","price_adult":"275000.00","price_child":"275000.00","price_infant":"0.00","availability":"77","is_promo":"0","is_active":"1","seat_map_subclass":"[[\"K3AC\",1,[[1,1,1,\"A\",\"J\",1],[1,2,1,\"B\",\"J\",1],[1,4,1,\"C\",\"J\",1],[2,1,2,\"A\",\"J\",1]]],[\"K3AC\",2,[[1,1,1,\"A\",\"J\",1],[1,2,1,\"B\",\"J\",1],[1,4,1,\"C\",\"J\",1],[2,1,2,\"A\",\"J\",1],[2,2,2,\"B\",\"J\",1],[2,4,2,\"C\",\"J\",1],[2,5,2,\"D\",\"J\",1],[3,1,3,\"A\",\"J\",1],[3,2,3,\"B\",\"J\",1],[3,4,3,\"C\",\"J\",1],[3,5,3,\"D\",\"J\",1],[4,1,4,\"A\",\"J\",1],[4,2,4,\"B\",\"J\",1],[4,4,4,\"C\",\"J\",1],[4,5,4,\"D\",\"J\",1],[10,1,10,\"A\",\"J\",1],[10,2,10,\"B\",\"J\",1],[10,4,10,\"C\",\"J\",1],[10,5,10,\"D\",\"J\",1],[11,1,11,\"A\",\"J\",0],[11,2,11,\"B\",\"J\",0],[11,4,11,\"C\",\"J\",0],[11,5,11,\"D\",\"J\",1],[12,1,12,\"A\",\"J\",0],[12,2,12,\"B\",\"J\",0],[12,4,12,\"C\",\"J\",0],[12,5,12,\"D\",\"J\",0],[13,2,13,\"B\",\"J\",1],[13,4,13,\"C\",\"J\",0],[13,5,13,\"D\",\"J\",0]]],[\"K3AC\",3,[[1,1,1,\"A\",\"J\",1],[1,2,1,\"B\",\"J\",1],[1,4,1,\"C\",\"J\",1],[2,1,2,\"A\",\"J\",0]]],[\"K3AC\",4,[[1,1,1,\"A\",\"J\",1],[1,2,1,\"B\",\"J\",1],[1,4,1,\"C\",\"J\",0],[2,1,2,\"A\",\"J\",0]]],[\"K3AC\",5,[[1,1,1,\"A\",\"J\",1],[1,2,1,\"B\",\"J\",1],[1,4,1,\"C\",\"J\",1],[2,1,2,\"A\",\"J\",0]]]]","timestamp":"2015-06-24 09:11:09"},"login_status":"false","token":"a86d0826af2e445be7c8ad36a5ab2b601358c040"}


<script>
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myObj.name;
  }
};
xmlhttp.open("GET", "seat.json", true);
xmlhttp.send();
</script>