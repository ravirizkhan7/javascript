var biodata = {
    nama : 'ravi',
    kelas : 'javasrcipt,laravel',
    alamat : 'lubuk alung',
    umur : 20,
    univ :{ 
        univ :'UT',
        alamat:{
            alamat:'tangerang',
        fakultas:{
            fakulats : 'sains dan teknologi',
            prodi:{
                MT:{

                },
                Sistem_informasi :{

                },
                statistika:{

                },
                Biologi:{

                },
                Sains_Data:{

                },
                kelas:{
                    anak:{
                        cucu:{
                            nama:'bud',                        }
                    }
                }
            }
        }
    }
}
}

console.log(biodata.kakek.nenek.ayah.ibu.anak.cucu.nama);
