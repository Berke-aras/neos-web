# armstrong sayı
# 153 = 1**3 + 5**3 + 3**3 - eğer eşitse armstrong sayi
def armstrong(sayi):
    sayiUzunluk = len(str(sayi))

    sonuc = 0

    for i in range(0, (sayiUzunluk)):
        sonuc += int(sayi[i]) ** sayiUzunluk
    
    if int(sayi) == int(sonuc):
        print("Girdiğiniz Sayı Armstrong bir sayıdır: ", sonuc)
    elif int(sayi) != int(sonuc):
        print("Girdiğiniz Sayı Armstrong bir sayı DEĞİLDİR!: ", sayi, "Sonuç: ", sonuc)
    else:
        print("Hatalı Giriş")

# sayi = input("Sayi Girin: ")
# armstrong(sayi)



#girilen sayı asal mı 1 ile kendisi hariç hiç bir sayıya bölünemez

def asalmi(sayi):
    sayi = int(sayi)
    asal = True
    for i in range(2, sayi):
        if sayi == 0 or sayi == 1:
            print("Asal Değil")
            asal = False
            break
        if sayi == 2:
            asal = True
            break
        elif sayi % i == 0:
            print("Asal Değil")
            asal = False
            break
    if asal == True:
        print("Asal")

# sayi = input("Sayı: ")
# asalmi(sayi)




#99 dakuza kadar kelimlerle yazdırma
def sayiYazdir(sayi):
    birler_listesi = ["sıfır", "bir", "iki", "üç", "dört","beş", "altı", "yedi", "sekiz", "dokuz"]
    onlar_listesi = ["on", "yirmi","otuz","kırk","elli","altmış","yetmiş","seksen","doksan"]

    sayi = int(sayi)
    sayiUzunluk = len(str(sayi))

    if sayiUzunluk == 1:
        birler = birler_listesi[sayi]
        print(birler)
    elif sayiUzunluk == 2:
        birler = ""
        birler = sayi % 10
        if birler != 0:
            birler = birler_listesi[birler]
        
        onl = int (sayi / 10)
        onlar = onlar_listesi[onl - 1]
        
        print(onlar,birler)
    else:
        print("Hatalı Giriş")

# sayi = input("Sayi Girin: ")
# sayiYazdir(sayi)