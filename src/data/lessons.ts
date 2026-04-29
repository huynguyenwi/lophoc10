import { Subject } from '../types';

export const subjects: Subject[] = [
  {
    id: 'math',
    name: 'Toán Học',
    icon: 'Calculator',
    color: 'bg-blue-500',
    lessons: [
      {
        id: 'math-1',
        title: 'Phân số và các phép tính với phân số',
        theory: 'Phân số gồm tử số và mẫu số. Muốn cộng hoặc trừ hai phân số khác mẫu số, ta quy đồng mẫu số rồi thực hiện phép tính. Muốn nhân hai phân số, ta lấy tử số nhân tử số, mẫu số nhân mẫu số. Muốn chia hai phân số, ta lấy phân số thứ nhất nhân với phân số thứ hai đảo ngược.',
        questions: [
          {
            id: 'q1',
            text: 'Tính 1/2 + 1/3 = ?',
            options: ['2/5', '5/6', '1/5', '5/5'],
            correctAnswer: 1
          },
          {
            id: 'q2',
            text: 'Kết quả của phép tính 2/5 * 5/2 là?',
            options: ['1', '4/25', '25/4', '10/10'],
            correctAnswer: 0
          },
          {
            id: 'q-m1-3',
            text: 'Phân số nào lớn nhất trong các phân số sau: 1/2, 1/3, 1/4, 1/5?',
            options: ['1/2', '1/3', '1/4', '1/5'],
            correctAnswer: 0
          }
        ]
      },
      {
        id: 'math-2',
        title: 'Số thập phân & Phép tính',
        theory: 'Số thập phân gồm phần nguyên và phần thập phân, ngăn cách bởi dấu phẩy. Ví dụ: 12,34. Lưu ý: Khi nhân một số thập phân với 10, 100, 1000... ta chỉ việc chuyển dấu phẩy sang bên phải một, hai, ba... chữ số.',
        questions: [
          {
            id: 'q3',
            text: 'Số 0,5 viết dưới dạng phân số tối giản là?',
            options: ['5/10', '1/5', '1/2', '5/5'],
            correctAnswer: 2
          },
          {
            id: 'q-m2-2',
            text: 'Tính 0,25 + 0,5 = ?',
            options: ['0,30', '0,75', '0,7', '0,55'],
            correctAnswer: 1
          },
          {
            id: 'q-m2-3',
            text: 'Kết quả của 12,34 x 100 là?',
            options: ['1,234', '123,4', '1234', '12340'],
            correctAnswer: 2
          }
        ]
      },
      {
        id: 'math-3',
        title: 'Hình thang và Diện tích hình thang',
        theory: 'Hình thang là hình tứ giác có một cặp cạnh đối diện song song. Công thức tính diện tích hình thang: S = (a + b) x h : 2 (Trong đó a, b là độ dài 2 đáy, h là chiều cao tương ứng).',
        questions: [
          {
            id: 'q-m3-1',
            text: 'Tính diện tích hình thang có đáy lớn 10cm, đáy bé 6cm, chiều cao 5cm.',
            options: ['40 cm2', '80 cm2', '30 cm2', '50 cm2'],
            correctAnswer: 0
          },
          {
            id: 'q-m3-2',
            text: 'Một hình thang có diện tích 60cm2, tổng hai đáy là 20cm. Chiều cao của hình thang đó là?',
            options: ['3 cm', '6 cm', '12 cm', '5 cm'],
            correctAnswer: 1
          }
        ]
      },
      {
        id: 'math-4',
        title: 'Hình tròn, Chu vi và Diện tích',
        theory: 'Chu vi hình tròn: C = d x 3,14 hoặc C = r x 2 x 3,14 (r là bán kính, d là đường kính). Diện tích hình tròn: S = r x r x 3,14.',
        questions: [
          {
            id: 'q-m4-1',
            text: 'Bán kính hình tròn là 5cm. Diện tích hình tròn đó là?',
            options: ['31,4 cm2', '15,7 cm2', '78,5 cm2', '25,5 cm2'],
            correctAnswer: 2
          },
          {
            id: 'q-m4-2',
            text: 'Đường kính hình tròn là 10cm. Chu vi hình tròn đó là?',
            options: ['31,4 cm', '62,8 cm', '78,5 cm', '15,7 cm'],
            correctAnswer: 0
          }
        ]
      }
    ]
  },
  {
    id: 'vietnamese',
    name: 'Tiếng Việt',
    icon: 'BookOpen',
    color: 'bg-red-500',
    lessons: [
      {
        id: 'vn-1',
        title: 'Từ đồng nghĩa',
        theory: 'Từ đồng nghĩa là những từ có nghĩa giống nhau hoặc gần giống nhau. Có 2 loại: đồng nghĩa hoàn toàn (có thể thay thế nhau) và đồng nghĩa không hoàn toàn (phải cân nhắc sắc thái khi dùng).',
        questions: [
          {
            id: 'q4',
            text: 'Từ nào đồng nghĩa với từ "thông minh"?',
            options: ['Sáng dạ', 'Chậm chạp', 'Hiền lành', 'Ngây thơ'],
            correctAnswer: 0
          },
          {
            id: 'q-v1-2',
            text: 'Cặp từ nào sau đây là từ đồng nghĩa không hoàn toàn?',
            options: ['Xe lửa - Tàu hỏa', 'Ăn - Xơi', 'Ba - Bố', 'Mẹ - Má'],
            correctAnswer: 1
          }
        ]
      },
      {
        id: 'vn-2',
        title: 'Từ trái nghĩa',
        theory: 'Từ trái nghĩa là những từ có nghĩa trái ngược nhau. Việc sử dụng từ trái nghĩa giúp tạo ra sự tương phản sinh động, làm nổi bật những sự vật, sự việc đối lập.',
        questions: [
          {
            id: 'q-v2-1',
            text: 'Từ nào trái nghĩa với từ "Hạnh phúc"?',
            options: ['Vui vẻ', 'Sung sướng', 'Khổ đau', 'Bình yên'],
            correctAnswer: 2
          },
          {
            id: 'q-v2-2',
            text: 'Trong câu "Gần mực thì đen, gần đèn thì rạng", cặp từ trái nghĩa là?',
            options: ['Gần - Đèn', 'Mực - Đèn', 'Đen - Rạng', 'Gần - Rạng'],
            correctAnswer: 2
          }
        ]
      },
      {
        id: 'vn-3',
        title: 'Từ đồng âm và Từ đa nghĩa',
        theory: 'Từ đồng âm là những từ giống nhau về âm nhưng khác hẳn nhau về nghĩa. Từ đa nghĩa là từ có một nghĩa gốc và một hay một số nghĩa chuyển. Các nghĩa của từ đa nghĩa luôn có mối liên hệ với nhau.',
        questions: [
          {
            id: 'q-v3-1',
            text: 'Trong hai câu: "Lồng chim rất đẹp" và "Con ngựa đang lồng", từ "lồng" là?',
            options: ['Từ đồng nghĩa', 'Từ trái nghĩa', 'Từ đồng âm', 'Từ đa nghĩa'],
            correctAnswer: 2
          },
          {
            id: 'q-v3-2',
            text: 'Từ "chân" trong "chân núi" mang nghĩa?',
            options: ['Nghĩa gốc', 'Nghĩa chuyển', 'Nghĩa đồng âm', 'Nghĩa đen'],
            correctAnswer: 1
          }
        ]
      }
    ]
  },
  {
    id: 'science',
    name: 'Khoa Học',
    icon: 'FlaskConical',
    color: 'bg-green-500',
    lessons: [
      {
        id: 'sci-1',
        title: 'Sự sinh sản và Phát triển',
        theory: 'Mọi người đều được sinh ra từ bố và mẹ. Trải qua các giai đoạn: Tuổi thơ -> Tuổi dậy thì -> Tuổi trưởng thành -> Tuổi già. Tuổi dậy thì là giai đoạn biến đổi mạnh mẽ nhất về thể chất và tâm lý.',
        questions: [
          {
            id: 'q5',
            text: 'Giai đoạn nào cơ thể xuất hiện các đặc điểm sinh dục phụ rõ rệt nhất?',
            options: ['Tuổi thơ', 'Tuổi dậy thì', 'Tuổi già', 'Tuổi trưởng thành'],
            correctAnswer: 1
          },
          {
            id: 'q-s1-2',
            text: 'Phụ nữ có thai cần lưu ý điều gì?',
            options: ['Làm việc thật nặng', 'Ăn uống đủ chất và tránh chất kích thích', 'Không cần đi khám thai', 'Uống nhiều cà phê'],
            correctAnswer: 1
          }
        ]
      },
      {
        id: 'sci-2',
        title: 'Sử dụng năng lượng điện',
        theory: 'Điện đóng vai trò rất quan trọng trong đời sống và sản xuất. Tuy nhiên cần sử dụng điện an toàn để tránh hỏa hoạn, điện giật và tiết kiệm điện để bảo vệ môi trường.',
        questions: [
          {
            id: 'q-s2-1',
            text: 'Hành động nào sau đây giúp tiết kiệm điện?',
            options: ['Bật đèn cả ngày', 'Tắt thiết bị khi không sử dụng', 'Mở tủ lạnh liên tục', 'Để tivi chờ suốt đêm'],
            correctAnswer: 1
          },
          {
            id: 'q-s2-2',
            text: 'Nguồn năng lượng nào là năng lượng sạch, vô tận?',
            options: ['Than đá', 'Dầu mỏ', 'Năng lượng mặt trời', 'Khí đốt'],
            correctAnswer: 2
          }
        ]
      },
      {
        id: 'sci-3',
        title: 'An toàn giao thông đường bộ',
        theory: 'Khi tham gia giao thông cần chấp hành đúng luật lệ: Đi bên phải, đội mũ bảo hiểm khi đi xe máy, không dàn hàng ngang, không vượt đèn đỏ.',
        questions: [
          {
            id: 'q-s3-1',
            text: 'Khi đi xe đạp trên đường, chúng ta nên đi như thế nào?',
            options: ['Đi sát lề bên trái', 'Đi dàn hàng ba', 'Đi sát lề bên phải', 'Đi vào làn đường xe ô tô'],
            correctAnswer: 2
          }
        ]
      }
    ]
  },
  {
    id: 'history-geo',
    name: 'Lịch sử & Địa lý',
    icon: 'History',
    color: 'bg-orange-500',
    lessons: [
      {
        id: 'his-1',
        title: 'Phong trào chống Pháp cuối thế kỷ XIX',
        theory: 'Trương Định được nhân dân suy tôn "Bình Tây Đại nguyên soái". Nguyễn Trường Tộ mong muốn canh tân đất nước nhưng không được triều đình thực hiện. Phong trào Cần vương nổ ra hưởng ứng Chiếu Cần vương của vua Hàm Nghi.',
        questions: [
          {
            id: 'q6',
            text: 'Trương Định được nhân dân suy tôn là gì?',
            options: ['Đại tướng quân', 'Bình Tây Đại nguyên soái', 'Khâm sai đại thần', 'Vua không ngai'],
            correctAnswer: 1
          },
          {
            id: 'q-h1-2',
            text: 'Ai là người đưa ra các bản điều trần mong muốn canh tân đất nước?',
            options: ['Phan Bội Châu', 'Nguyễn Trường Tộ', 'Trương Định', 'Tôn Thất Thuyết'],
            correctAnswer: 1
          }
        ]
      },
      {
        id: 'geo-1',
        title: 'Địa lý Việt Nam',
        theory: 'Việt Nam hình chữ S, nằm trên bán đảo Đông Dương. Có 3/4 diện tích là đồi núi, 1/4 là đồng bằng. Khí hậu nhiệt đới gió mùa có sự khác biệt giữa hai miền Nam - Bắc.',
        questions: [
          {
            id: 'q-g1-1',
            text: 'Phần đất liền nước ta giáp với các nước nào?',
            options: ['Lào, Thái Lan', 'Trung Quốc, Lào, Campuchia', 'Thái Lan, Campuchia', 'Trung Quốc, Campuchia'],
            correctAnswer: 1
          },
          {
            id: 'q-g1-2',
            text: 'Nước ta có đường bờ biển dài bao nhiêu?',
            options: ['2360 km', '3260 km', '1650 km', '3450 km'],
            correctAnswer: 1
          }
        ]
      },
      {
        id: 'geo-2',
        title: 'Các châu lục trên thế giới',
        theory: 'Thế giới có 6 châu lục: Châu Á, Châu Âu, Châu Phi, Châu Mỹ, Châu Đại Dương và Châu Nam Cực. Châu Á là châu lục có diện tích và số dân lớn nhất.',
        questions: [
          {
            id: 'q-g2-1',
            text: 'Châu lục nào lạnh nhất thế giới?',
            options: ['Châu Âu', 'Châu Á', 'Châu Nam Cực', 'Châu Mỹ'],
            correctAnswer: 2
          },
          {
            id: 'q-g2-2',
            text: 'Việt Nam nằm ở châu lục nào?',
            options: ['Châu Âu', 'Châu Á', 'Châu Phi', 'Châu Mỹ'],
            correctAnswer: 1
          }
        ]
      }
    ]
  }
];
