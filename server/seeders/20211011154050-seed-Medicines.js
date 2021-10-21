'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Medicines", [
      {
        name: "Ambroxol",
        price: 28000,
        description: 'meredakan batuk berdahak',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Magnesium hidroksida",
        price: 30000,
        description: 'mengurangi nyeri lambung dengan menetralkan asam lambung',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Attapulgite",
        price: 40000,
        description: 'mengurangi nyeri lambung dengan menetralkan asam lambung',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "amoxicillin",
        price: 10000,
        description: 'antibiotik',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "alogliptin",
        price: 65000,
        description: 'mengobati diabetes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Aspirin",
        price: 15000,
        description: 'mengurangi sakit kepala',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Anastrazole",
        price: 75000,
        description: 'hormon treatment',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Benzoyl peroxide",
        price: 65000,
        description: 'mengobati jerawat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Benzydamine",
        price: 85000,
        description: 'anti-inflammatory',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bisacodyl",
        price: 20000,
        description: 'obat pencahar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bumetanide",
        price: 400000,
        description: 'mengobati gagal jantung dan penumpukan cairan di tubuh Anda',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Carbimazole",
        price: 120000,
        description: 'mengobati tiroid yang terlalu aktif (hipertiroidisme)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Carvedilol",
        price: 55000,
        description: 'mengobati tekanan darah tinggi (hipertensi)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cefalexin",
        price: 30000,
        description: 'antibiotik',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cetirizine",
        price: 34000,
        description: 'Cetirizine adalah obat antihistamin yang meredakan gejala alergi.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Codeine",
        price: 87000,
        description: 'obat penghilang rasa sakit, digunakan setelah operasi atau cedera.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dextromethorpan",
        price: 25000,
        description: 'meredakan batuk kering',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Diazepam",
        price: 65000,
        description: 'mengobati kecemasan, kejang otot dan kejang (kejang)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Diclofenac",
        price: 42000,
        description: 'mengurangi pembengkakan (peradangan) dan nyeri.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Docusate",
        price: 25000,
        description: 'obat pencahar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dosulepin",
        price: 150000,
        description: 'digunakan untuk mengobati depresi.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Enalapril",
        price: 250000,
        description: 'mengurangi tekanan darah tinggi dan untuk mencegah atau mengobati gagal jantung.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Eplerenone",
        price: 350000,
        description: 'mengurangi resiko gagal jantung / stroke',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Erythromycin",
        price: 28000,
        description: 'antibiotik',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ferrous sulfate",
        price: 38000,
        description: 'mengobati anemia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Folic acid",
        price: 18000,
        description: 'meningkatkan sel darah merah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Fusidic acid",
        price: 58000,
        description: 'mengobati infeksi bakteri, seperti infeksi kulit termasuk selulitis dan impetigo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Gliclazide",
        price: 28000,
        description: 'mengobati diabetes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hydrocortisone",
        price: 128000,
        description: 'obat steroid (kortikosteroid)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hydroxocobalamin",
        price: 78000,
        description: 'mengobati dan mencegah anemia defisiensi vitamin B12',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ibuprofen",
        price: 56000,
        description: 'mengobati berbagai sakit dan nyeri',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ketoconazole",
        price: 88000,
        description: 'mengobati infeksi kulit yang disebabkan oleh jamur (ragi)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lactulose",
        price: 35000,
        description: 'obat pencahar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Latanoprost",
        price: 79000,
        description: 'mengobati tekanan tinggi di dalam mata',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Linagliptin",
        price: 28000,
        description: 'Linagliptin diresepkan untuk orang yang masih memiliki gula darah tinggi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lisinopril",
        price: 125000,
        description: 'mengobati tekanan darah tinggi dan gagal jantung.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lithium",
        price: 230000,
        description: 'jenis obat yang dikenal sebagai mood stabilizer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lorazepam",
        price: 88000,
        description: 'mengobati kecemasan dan masalah tidur',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Melatonin",
        price: 52000,
        description: 'membantu mengontrol pola tidur',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Parasetamol",
        price: 20000,
        description: 'menurunkan panas (antipiretik) dan meredakan nyeri otot atau sendi',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Medicines", null);
  }
};
