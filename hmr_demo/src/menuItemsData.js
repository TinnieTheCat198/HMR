export const menuItemsData = [
    {
      title: 'Trang chủ',
      url: '/',
    },
    {
      title: 'Giới thiệu',
      url: '/gioi-thieu',
      submenu: [
        {
          title: 'Về chúng tôi',
          url: '/gioi-thieu#ve-chung-toi',
        },
        {
          title: 'Giới thiệu về bác sĩ',
          url: '/gioi-thieu#bac-si',
        },
        {
          title: 'Danh sách phòng khám',
          url: '/gioi-thieu#danh-sach-phong-kham',
        },
      ],
    },
    {
      title: 'Bệnh điều trị',
      url: '/benh-dieu-tri',
      submenu: [
        {
          title: 'Phục hồi chức năng - Vật lý trị liệu - Hiệu chỉnh cơ xương khớp',
          url: '/benh-dieu-tri#co-xuong-khop',
          submenu: [

          ]
        },
        {
          title: 'Phục hồi chức năng Sản phụ khoa - Nam khoa',
          url: '/benh-dieu-tri#san-phu-nam-khoa',
        },
        {
          title: 'Phục hồi chức năng Nhi khoa',
          url: '/benh-dieu-tri#nhi-khoa-khac-dot-quy',
        },
        {
          title: 'Phục hồi chức năng sau tai biến',
          url: '/benh-dieu-tri#sau-tai-bien',
        },
      ],
    },
    {
      title: 'Phương pháp điều trị',
      url: '/phuong-phap-dieu-tri',
    },
    {
      title: 'Bác sĩ khuyên dùng',
      url: '/bac-si-khuyen-dung',
    },
    {
      title: 'Liên hệ',
      url: '/lien-he',
    },
  ];