
var biodata = {
    nama : 'ravi',
    usia : 20,
    alamat : 'lubuk alung',
    universitas :{ 
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
