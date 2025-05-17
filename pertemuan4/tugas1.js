
var biodata = {
    nama : 'ravi',// tipe String
    usia : 20,//tipe number
    alamat : 'lubuk alung',// tipe String
    universitas :{ // tipe objek
        ut:{
            jurusan:{
                Sistem_informasi:{
                    kelas:'SI C'
                },
                matematika:{
                    kelas:'MTK D'
                }
            }
        }
    }
        
}

console.log(biodata.nama+"\n"+biodata.usia+"\n"+biodata.alamat+"\n"+biodata.universitas.ut.jurusan.Sistem_informasi.kelas);
