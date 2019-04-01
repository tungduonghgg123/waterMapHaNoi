   var factories = [
        {
            "District": "Tây Hồ",
            "Name": "Công ty Nước sạch Hà Nội",
            "Location": "21.0461759,105.8437157",
            "Address": "44 Yên Phụ, Trúc Bạch, Ba Đình, Hà Nội, Việt Nam"
        },
        {
            "District": "Tây Hồ",
            "Name": "Công Ty Tnhh Mtv Thoát Nước Hà Nội - Xn Số 1",
            "Location": "21.0447879,105.8144492",
            "Address": "284 Thụy Khuê, Thuỵ Khuê, Tây Hồ, Hà Nội, Việt Nam"
        },
        {
            "District": "Ba Đình",
            "Name": "Công Ty Nước Sạch Hà Nội - \r\nTrung Tâm Điều Hành Nước Sạch Quận Ba Đình",
            "Location": "21.0297022,105.8230859",
            "Address": "18 Núi Trúc, Giảng Võ, Ba Đình, Hà Nội, Việt Nam"
        },
        {
            "District": "Ba Đình",
            "Name": "Công ty Nước sạch Hà Nội",
            "Location": "21.0461759,105.8437157",
            "Address": "44 Yên Phụ, Trúc Bạch, Ba Đình, Hà Nội, Việt Nam"
        },
        {
            "District": "Ba Đình",
            "Name": "Trạm bơm nước Thành Công",
            "Location": "21.0227747,105.8138859",
            "Address": "Đường La Thành, Thành Công, Ba Đình, Hà Nội, Việt Nam"
        },
        {
            "District": "Hai Bà Trưng",
            "Name": "Xí Nghiệp Kinh Doanh Nước Sạch Hai Bà Trưng",
            "Location": "21.0094412,21.0094412,",
            "Address": "1, Đường Trần Khát Chân, Phường Thanh Lương, Quận Hai Bà Trưng, Thành Phố Hà Nội, Đống Mác, Hai Bà Trưng, Hà Nội, Việt Nam"
        },
        {
            "District": "Hai Bà Trưng",
            "Name": "Nhà máy nước Lương Yên",
            "Location": "21.0096696,105.8618993",
            "Address": "283/2 Trần Khát Chân, Đống Mác, Hai Bà Trưng, Hà Nội, Việt Nam"
        },
        {
            "District": "Hai Bà Trưng",
            "Name": "Nhà máy nước Tương Mai",
            "Location": "20.9870412,105.8537999",
            "Address": "Nguyễn Đức Cảnh, Tương Mai, Hai Bà Trưng, Hà Nội"
        },
        {
            "District": "Hai Bà Trưng",
            "Name": "Trạm Cấp Nước Nguyễn Công Trứ",
            "Location": "21.0127271,105.853073",
            "Address": "H4 Nguyễn Công Trứ, Phố Huế, Hai Bà Trưng, Hà Nội"
        },
        {
            "District": "Thanh Xuân",
            "Name": "Công ty Cổ phần VIWACO",
            "Location": "21.0067328,105.8042729",
            "Address": "17 Nguyễn Thị Thập, Trung Hoà, Thanh Xuân, Hà Nội"
        },
        {
            "District": "Thanh Xuân",
            "Name": "Nhà Máy Nước Hạ Đình",
            "Location": "20.9880535,105.8079737",
            "Address": "14 Hạ Đình, Thanh Xuân, Hà Nội, Việt Nam"
        },
        {
            "District": "Thanh Xuân",
            "Name": "Công Ty Cổ Phần Xây Dựng Cấp Thoát Nước Số 1",
            "Location": "20.9924846,105.8108497",
            "Address": "56 Ngõ 85, Hạ Đình, Quận Thanh Xuân, Thành Phố Hà Nội, Thanh Xuân Trung, Thanh Xuân, Hà Nội, Việt Nam"
        },
        {
            "District": "Thanh Xuân",
            "Name": "Trạm Nước Kim Giang",
            "Location": "20.9846051,105.8121304",
            "Address": "Trạm Nước Kim Giang, Kim Giang, Thanh Xuân, Hà Nội, Việt Nam"
        },
        {
            "District": "Đông Anh",
            "Name": "Nhà máy nước Bắc Thăng Long",
            "Location": "21.1205487,105.7661952",
            "Address": "H., Liên xã, Kim Chung, Đông Anh, Hà Nội, Việt Nam"
        },
        {
            "District": "Đông Anh",
            "Name": "Trạm bơm DPS (20m3/s)",
            "Location": "21.110314,105.7942249",
            "Address": "Hải Bối, Đông Anh, Hà Nội, Việt Nam"
        },
        {
            "District": "Sóc Sơn",
            "Name": "Trạm Nước Sạch Sóc Sơn",
            "Location": "21.252621,105.848812",
            "Address": "tt., Tiên Dược, Sóc Sơn, Hà Nội, Việt Nam"
        },
        {
            "District": "Mê Linh"
        },
        {
            "District": "Đan Phượng",
            "Name": "Trạm bơm Đan Hoài",
            "Location": "21.1128254,105.7212109",
            "Address": "Liên Hà, Đan Phượng, Hà Nội, Việt Nam"
        },
        {
            "District": "Đan Phượng",
            "Name": "Nhà máy cung cấp nước sạch Phường Thượng Cát",
            "Location": "21.0904813,105.7330173",
            "Address": "Kỳ Vũ, Thượng Cát, Từ Liêm, Hà Nội, Việt Nam"
        },
        {
            "District": "Đan Phượng",
            "Name": "Nhà Máy Nước Sạch Thị Trấn Phùng",
            "Location": "21.0879887,105.6725228",
            "Address": "Khu Đồng Xây, Đan Phượng, Hà Nội, Việt Nam"
        },
        {
            "District": "Từ Liêm",
            "Name": "Nhà máy cung cấp nước sạch Phường Thượng Cát",
            "Location": "21.0904813,105.7330173",
            "Address": "Kỳ Vũ, Thượng Cát, Từ Liêm, Hà Nội, Việt Nam"
        },
        {
            "District": "Từ Liêm",
            "Name": "Công ty cổ phần cấp nước sạch Việt Nam",
            "Location": "21.0042899,105.7770988",
            "Address": "Số 10 ĐCT08, Mễ Trì, Từ Liêm, Hà Nội, Việt Nam"
        },
        {
            "District": "Từ Liêm",
            "Name": "Xí Nghiệp Kinh Doanh Nước Sạch Cầu Giấy",
            "Location": "21.0438754,105.7944042",
            "Address": "121 Nghĩa Tân, Khu tập thể Nghĩa Tân, Cầu Giấy, Hà Nội"
        },
        {
            "District": "Hoài Đức",
            "Name": "Công ty CP Nước sạch Tây Hà Nội",
            "Location": "21.0372054,105.7331616",
            "Address": "Số 40, LK 38, Khu ĐT Vân Canh - Hud, Hoài Đức, Hà Nội 10500, Việt Nam"
        },
        {
            "District": "Mỹ Đức",
            "Name": "Trạm Cấp Nước Sạch Hương Sơn, Công Ty Cấp Nước Hà Đông",
            "Location": "20.6204315,105.7762814",
            "Address": "Hương Sơn, Mỹ Đức, Hà Nội, Việt Nam"
        },
        {
            "District": "Mỹ Đức",
            "Name": "Công ty cổ phần Nước và Hạ tầng kỹ thuật Hà Nội",
            "Location": "21.0455916,105.7930003",
            "Address": "347 Hoàng Quốc Việt, Nghĩa Tân, Cầu Giấy, Hà Nội, Việt Nam"
        },
        {
            "District": "Ứng Hòa",
            "Name": "Xí Nghiệp Nước Sạch Ứng Hòa",
            "Location": "20.7314131,105.7734238",
            "Address": "47B Ngõ 42 Quang Trung, TT. Vân Đình, Ứng Hòa,Hà Nội"
        },
        {
            "District": "Phú Xuyên",
            "Name": "Công Ty Tnhh Mtv Nước Sạch Hà Đông - Xí Nghiệp Nước Sạch Phú Xuyên",
            "Location": "20.743648,105.9172368",
            "Address": "QL1A, TT. Phú Xuyên, Phú Xuyên, Hà Nội, Việt Nam"
        },
        {
            "District": "Phú Xuyên",
            "Name": "Trạm Cấp Nước Phú Minh",
            "Location": "20.7788765,105.9132303",
            "Address": "Đường Không Tên, Vạn Điểm, Phú Xuyên, Hà Nội, Việt Nam"
        },
        {
            "District": "Thường Tín"
        },
        {
            "District": "Thanh Oai",
            "Name": "Trạm bơm thạch nham",
            "Location": "20.8643542,105.7703287",
            "Address": "Mỹ hưng Huyện Thanh Oai, TT. Kim Bài, Thanh Oai, HN"
        },
        {
            "District": "Thanh Oai",
            "Name": "Nhà máy nước sạch Thanh Oai",
            "Location": "20.8559893,105.7624067",
            "Address": "TT. Kim Bài, Thanh Oai, Hà Nội, Việt Nam"
        },
        {
            "District": "Chương Mỹ"
        },
        {
            "District": "Ba Vì",
            "Name": "Nhà máy nước Sông Đà - Ba Vì",
            "Location": "21.2271784,105.3595291",
            "Address": "Phú Nhiêu, Ba Vì, Hà Nội, Việt Nam"
        },
        {
            "District": "Sơn Tây",
            "Name": "Trạm Xử Lý Nước Số 2 Công Ty Cấp Nước Sơn Tây - Nhà Máy Xử Lý Nước Số 1",
            "Location": "21.1419645,105.5104315",
            "Address": "Cổng Ô, Viên Sơn, Sơn Tây, Hà Nội, Việt Nam"
        },
        {
            "District": "Phúc Thọ"
        },
        {
            "District": "Thạch Thất"
        },
        {
            "District": "Hoài Đức",
            "Name": "Công ty CP Nước sạch Tây Hà Nội",
            "Location": "21.0372054,105.7331616",
            "Address": "Số 40, LK 38, Khu ĐT Vân Canh - Hud, Hoài Đức, Hà Nội 10500, Việt Nam"
        },
        {
            "District": "Quốc Oai",
            "Name": "Trạm Bơm Cấn Hạ",
            "Location": "20.944743,105.6203528",
            "Address": "Trạm Bơm Yên Sở Hoàng Mai, Cấn Huu, Quốc Oai, Hà Nội, Việt Nam"
        },
        {
            "District": "Quốc Oai",
            "Name": "NHÀ MÁY NƯỚC MẶT SÔNG ĐUỐNG",
            "Location": "21.0575233,105.9765334",
            "Address": "Phù Đổng, Gia Lâm, Hà Nội, Việt Nam"
        },
        {
            "District": "Long Biên",
            "Name": "Công Ty Cổ phần Nước Sạch Số 2 Hà Nội",
            "Location": "21.0477165,21.0477165",
            "Address": "19 Nguyễn Văn Linh, Việt Hưng, Long Biên, Hà Nội"
        },
        {
            "District": "Long Biên",
            "Name": "Xí Nghiệp Thoát Nước Số 5",
            "Location": "21.034179,105.9054939",
            "Address": "449 Nguyễn Văn Linh, Phúc Đồng, Long Biên, Hà Nội"
        },
        {
            "District": "Long Biên",
            "Name": "       Nhà Máy Nước Khu Công Nghiệp Sài Đồng B",
            "Location": "21.0260893,105.9007094",
            "Address": "Công Nghiệp 3, Long Biên, Hà Nội, Việt Nam"
        },
        {
            "District": "Hoàng Mai",
            "Name": "Xí nghiệp nước sạch Hoàng Mai",
            "Location": "20.970561,105.8460725",
            "Address": "ngõ 1141 Giải Phóng, Thịnh Liệt, Hoàng Mai, Hà Nội"
        },
        {
            "District": "Hoàng Mai",
            "Name": "Trạm bơm Yên Sở",
            "Location": "20.9573469,105.8702016",
            "Address": "Nguyễn Khoái, Yên Sở, Hoàng Mai, Hà Nội, Việt Nam"
        },
        {
            "District": "Hoàng Mai",
            "Name": "Công ty CP thương mại xây dựng cấp thoát nước",
            "Location": "20.97253,105.828005",
            "Address": "Số 1, OCT2, khu đô thị mới Bắc Linh Đàm, Đại Kim, Hoàng Mai, Hà Nội, Việt Nam"
        },
        {
            "District": "Hoàng Mai",
            "Name": "Công Ty Tnhh Công Nghệ Môi Trường Và Tự Động Hóa Minh Tân",
            "Location": "20.978967,105.820302",
            "Address": "Số 2, 16 Ngõ 250, Ngõ 64 Đường Kim Giang, Hà Nội, Kim Giang\\nHoàng Mai\\nHà Nội 100000, Việt Nam"
        },
        {
            "District": "Hoàng Mai",
            "Name": "Trạm cấp nước Linh Đàm",
            "Location": "20.9622912,105.8274257",
            "Address": "Linh Đường, Hoàng Liệt, Hoàng Mai, Hà Nội,"
        },
        {
            "District": "Hoàng Mai",
            "Name": "Xí Nghiệp Thoát Nước Số 3",
            "Location": "20.9738023,105.8878934",
            "Address": "Nguyễn Khoái, Trần Phú, Hoàng Mai, Hà Nội"
        },
        {
            "District": "Hoàng Mai",
            "Name": "Nhà máy nước Nam Dư",
            "Location": "20.975339,105.8873824",
            "Address": "ngõ 9 đường khuyến lương- trần phú- hoàng mai- hanoi, Trần Phú, Hoàng Mai, Hà Nội, Việt Nam"
        },
        {
            "District": "Hoàng Mai",
            "Name": "Trạm Cấp Nước Đền Lừ",
            "Location": "20.9845813,105.8589363",
            "Address": "32ho Đền Lừ, Hoàng Văn Thụ, Hoàng Mai, Hà Nội "
        },
        {
            "District": "Hoàng Mai",
            "Name": "Đối diện trạm cấp nước sạch Định Công",
            "Location": "20.9875679,105.8317667",
            "Address": "Khu đô thị Định Công, Hoàng Mai, Hà Nội, Việt Nam"
        },
        {
            "District": "Hoàng Mai",
            "Name": "Trạm Cấp Nước Sạch Khu Đô Thị Mới Định Công",
            "Location": "20.9877167,105.8315992",
            "Address": "Trần Nguyên Đán, Định Công, Hoàng Mai, Hà Nội"
        },
        {
            "District": "Hoàng Mai",
            "Name": "Nhà máy nước Pháp Vân",
            "Location": "20.9648174,105.8462754",
            "Address": "Hoàng Liệt, Hoàng Mai, Hà Nội, Việt Nam"
        },
        {
            "District": "Thanh Trì",
            "Name": "Khu tập thể Cấp thoát nước",
            "Location": "20.9139003,105.8537757",
            "Address": "Km 14,5 QL1A, Liên Ninh, Thanh Trì, Hà Nội"
        },
        {
            "District": "Thanh Trì",
            "Name": "Trạm Cấp Nước Sạch Tựu Liệt",
            "Location": "20.9530125,105.8342725",
            "Address": "192, Tựu Liệt, Thị Trấn Văn Điển, Huyện Thanh Trì,HN"
        },
        {
            "District": "Thanh Trì",
            "Name": "Xí Nghiệp Thoát Nước Số 7",
            "Location": "20.9591303,105.8041978",
            "Address": "53 Cầu Bươu, Tân Triều, Hà Đông, Hà Nội, Việt Nam"
        },
        {
            "District": "Thanh Trì",
            "Name": "Nhà máy nước sạch Đông Mỹ",
            "Location": "20.9165646,105.8736462",
            "Address": "Đông Phù, Thanh Trì, Hà Nội, Việt Nam"
        },
        {
            "District": "Hà Đông",
            "Name": "Công Ty TNHH MTV Nước Sạch Hà Đông - Cơ Sở 2 Ba La",
            "Location": "20.9582829,105.760807",
            "Address": "797 Quang Trung, Phú La, Hà Đông, Hà Nội, Việt Nam"
        },
        {
            "District": "Hà Đông",
            "Name": "Công Ty Nước Sạch Hà Đông",
            "Location": "20.9721371,105.7786756",
            "Address": "Số 4 Bà Triệu, P. Nguyễn Trãi, Hà Đông, Hà Nội"
        },
        {
            "District": "Hà Đông",
            "Name": "Công ty Cổ phần VIWACO",
            "Location": "21.0067328,105.8042729",
            "Address": "17 Nguyễn Thị Thập, Trung Hoà, Thanh Xuân, Hà Nội"
        },
        {
            "District": "Hà Đông",
            "Name": "Công ty Nước sạch Hà Nội",
            "Location": "21.0461759,105.8437157",
            "Address": "17 Nguyễn Thị Thập, Trung Hoà, Thanh Xuân, Hà Nội"
        },
        {
            "District": "Hà Đông",
            "Name": "Vinaconex Water Supply Jsc",
            "Location": "21.0069162,105.8043373",
            "Address": "17t8 trung hoa nhan chinh, Trung Hoà, Cầu Giấy,HN"
        },
        {
            "District": "Hà Đông",
            "Name": "Xí nghiệp Thoát nước số 6",
            "Location": "20.9841784,105.788221",
            "Address": "LK6C, P. Mộ Lao, Hà Đông, Hà Nội"
        },
        {
            "District": "Hà Đông",
            "Name": "Công Ty Cổ phần Nước Sạch Số 2 Hà Nội",
            "Location": "21.0477165,105.8979651",
            "Address": "19 Nguyễn Văn Linh, Việt Hưng, Long Biên, Hà Nội,"
        },
        {
            "District": "Đống Đa",
            "Name": "Xí nghiệp Thoát nước Số 2",
            "Location": "21.0045727,105.8174257",
            "Address": "107 Đường Láng, Thượng Đình, Đống Đa, Hà Nội"
        },
        {
            "District": "Đống Đa",
            "Name": "Xí Nghiệp Thoát Nước Số 4",
            "Location": "21.0061967,105.8361151",
            "Address": "1 Phố Lương Định Của, Kim Liên, Đống Đa, Hà Nội"
        },
        {
            "District": "Đống Đa",
            "Name": "Xí Nghiệp Kinh Doanh Nước Sạch Đống Đa - Trạm Bơm Tăng Áp Thành Công",
            "Location": "21.0228073,105.8140307",
            "Address": "Thành Công, Ba Đình, Hà Nội, Việt Nam"
        },
        {
            "District": "Hoàn Kiếm",
            "Name": "Bql Dự Án Thoát Nước Hà Nội",
            "Location": "21.0271686,105.8425373",
            "Address": "102 Hai Bà Trưng, Cửa Nam, Hoàn Kiếm, Hà Nội"
        },
        {
            "District": "Hoàn Kiếm",
            "Name": "Xí Nghiệp Kinh Doanh Nước Sạch Hoàn Kiếm",
            "Location": "21.0190906,105.8596937",
            "Address": "8C, Phường Phan Chu Trinh, Quận Hoàn Kiếm, Đường Đinh Công Tráng, Thành Phố Hà Nội, Phan Chu Trinh, Hoàn Kiếm, Hà Nội, Việt Nam"
        },
        {
            "District": "Cầu Giấy",
            "Name": "Nhà Máy Nước Mai Dịch",
            "Location": "21.0323738,105.7806627",
            "Address": "1 Phạm Hùng, Dịch Vọng Hậu, Cầu Giấy, Hà Nội"
        },
        {
            "District": "Cầu Giấy",
            "Name": "Xí Nghiệp Kinh Doanh Nước Sạch Cầu Giấy",
            "Location": "21.0438754,105.7944042",
            "Address": "121 Nghĩa Tân, Khu tập thể Nghĩa Tân, Cầu Giấy,hn"
        }
    ]