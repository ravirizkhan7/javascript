
var biodata = {
    nama : 'ravi',// tipe String
    usia : 20,//tipe number
    alamat : 'lubuk alung',// tipe String
    universitas :{ // tipe objek
        ut:{// tipe objek
            jurusan:{// tipe objek
                Sistem_informasi:{// tipe objek
                    kelas:'SI C'// tipe String
                },
                matematika:{// tipe objek
                    kelas:'MTK D'// tipe String
                }
            }
        }
    }
        
}

console.log(biodata.nama+"\n"+biodata.usia+"\n"+biodata.alamat+"\n"+biodata.universitas.ut.jurusan.Sistem_informasi.kelas);
