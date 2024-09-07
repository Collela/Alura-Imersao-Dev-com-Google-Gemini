const colorScheme = [
    {
        name: "amarelo",
        hex: "#FFFF00",
        rgb: [255, 255, 0],
        variations: [
            { name: "Amarelo Claro", hex: "#FFFFE0", rgb: [255, 255, 224] },
            { name: "Amarelo Escuro", hex: "#FFCC00", rgb: [255, 204, 0] },
            { name: "Amarelo Ouro", hex: "#FFD700", rgb: [255, 215, 0] },
            { name: "Amarelo Canário", hex: "#FFEF00", rgb: [255, 239, 0] },
        ]
    },
    {
        name: "vermelho",
        hex: "#FF0000",
        rgb: [255, 0, 0],
        variations: [
            { name: "Vermelho Claro", hex: "#FF7F7F", rgb: [255, 127, 127] },
            { name: "Vermelho Escuro", hex: "#8B0000", rgb: [139, 0, 0] },
            { name: "Vermelho Coral", hex: "#FF4040", rgb: [255, 64, 64] },
            { name: "Vermelho Vinho", hex: "#800000", rgb: [128, 0, 0] },
        ]
    },
    {
        name: "azul",
        hex: "#0000FF",
        rgb: [0, 0, 255],
        variations: [
            { name: "Azul Claro", hex: "#ADD8E6", rgb: [173, 216, 230] },
            { name: "Azul Escuro", hex: "#00008B", rgb: [0, 0, 139] },
            { name: "Azul Celeste", hex: "#87CEEB", rgb: [135, 206, 235] },
            { name: "Azul Marinho", hex: "#000080", rgb: [0, 0, 128] },
        ]
    },
    {
        name: "verde",
        hex: "#008000",
        rgb: [0, 128, 0],
        variations: [
            { name: "Verde Claro", hex: "#90EE90", rgb: [144, 238, 144] },
            { name: "Verde Escuro", hex: "#006400", rgb: [0, 100, 0] },
            { name: "Verde Limão", hex: "#32CD32", rgb: [50, 205, 50] },
            { name: "Verde Oliva", hex: "#808000", rgb: [128, 128, 0] },
        ]
    },
    {
        name: "roxo",
        hex: "#800080",
        rgb: [128, 0, 128],
        variations: [
            { name: "Roxo Claro", hex: "#D8BFD8", rgb: [216, 191, 216] },
            { name: "Roxo Escuro", hex: "#4B0082", rgb: [75, 0, 130] },
            { name: "Roxo Lavanda", hex: "#E6E6FA", rgb: [230, 230, 250] },
            { name: "Roxo Ameixa", hex: "#DDA0DD", rgb: [221, 160, 221] },
        ]
    },
    {
        name: "laranja",
        hex: "#FFA500",
        rgb: [255, 165, 0],
        variations: [
            { name: "Laranja Claro", hex: "#FFDAB9", rgb: [255, 218, 185] },
            { name: "Laranja Escuro", hex: "#FF8C00", rgb: [255, 140, 0] },
            { name: "Laranja Tangerina", hex: "#FF4500", rgb: [255, 69, 0] },
            { name: "Laranja Dourado", hex: "#FFC107", rgb: [255, 193, 7] },
        ]
    },
    {
        name: "rosa",
        hex: "#FFC0CB",
        rgb: [255, 192, 203],
        variations: [
            { name: "Rosa Claro", hex: "#FFB6C1", rgb: [255, 182, 193] },
            { name: "Rosa Escuro", hex: "#FF1493", rgb: [255, 20, 147] },
            { name: "Rosa Choque", hex: "#FF69B4", rgb: [255, 105, 180] },
            { name: "Rosa Pastel", hex: "#FFD1DC", rgb: [255, 209, 220] },
        ]
    },
    {
        name: "cinza",
        hex: "#808080",
        rgb: [128, 128, 128],
        variations: [
            { name: "Cinza Claro", hex: "#D3D3D3", rgb: [211, 211, 211] },
            { name: "Cinza Escuro", hex: "#A9A9A9", rgb: [169, 169, 169] },
            { name: "Cinza Prata", hex: "#C0C0C0", rgb: [192, 192, 192] },
            { name: "Cinza Chumbo", hex: "#696969", rgb: [105, 105, 105] },
        ]
    },
    {
        name: "turquesa",
        hex: "#40E0D0",
        rgb: [64, 224, 208],
        variations: [
            { name: "Turquesa Claro", hex: "#AFEEEE", rgb: [175, 238, 238] },
            { name: "Turquesa Escuro", hex: "#00CED1", rgb: [0, 206, 209] },
            { name: "Turquesa Médio", hex: "#48D1CC", rgb: [72, 209, 204] },
            { name: "Turquesa Verde", hex: "#00FFEF", rgb: [0, 255, 239] },
        ]
    },
    {
        name: "magenta",
        hex: "#FF00FF",
        rgb: [255, 0, 255],
        variations: [
            { name: "Magenta Claro", hex: "#FF77FF", rgb: [255, 119, 255] },
            { name: "Magenta Escuro", hex: "#8B008B", rgb: [139, 0, 139] },
            { name: "Magenta Violeta", hex: "#EE82EE", rgb: [238, 130, 238] },
            { name: "Magenta Fúcsia", hex: "#FF00BF", rgb: [255, 0, 191] },
        ]
    },
    {
        name: "açafrão",
        hex: "#F4C430",
        rgb: [244, 196, 48],
        variations: [
            { name: "Açafrão Claro", hex: "#FFE5B4", rgb: [255, 229, 180] },
            { name: "Açafrão Escuro", hex: "#DAA520", rgb: [218, 165, 32] },
            { name: "Açafrão Amarelo", hex: "#FFD700", rgb: [255, 215, 0] },
            { name: "Açafrão Dourado", hex: "#FFC72C", rgb: [255, 199, 44] },
        ]
    },
    {
        name: "marfim",
        hex: "#FFFFF0",
        rgb: [255, 255, 240],
        variations: [
            { name: "Marfim Claro", hex: "#FFFFE0", rgb: [255, 255, 224] },
            { name: "Marfim Escuro", hex: "#F5DEB3", rgb: [245, 222, 179] },
            { name: "Marfim Creme", hex: "#FFFDD0", rgb: [255, 253, 208] },
            { name: "Marfim Bege", hex: "#F0E68C", rgb: [240, 230, 140] },
        ]
    },
    {
        name: "púrpura",
        hex: "#800080",
        rgb: [128, 0, 128],
        variations: [
            { name: "Púrpura Claro", hex: "#D8BFD8", rgb: [216, 191, 216] },
            { name: "Púrpura Escuro", hex: "#4B0082", rgb: [75, 0, 130] },
            { name: "Púrpura Imperial", hex: "#6A0DAD", rgb: [106, 13, 173] },
            { name: "Púrpura Ameixa", hex: "#9932CC", rgb: [153, 50, 204] },
        ]
    },
    {
        name: "lavanda",
        hex: "#E6E6FA",
        rgb: [230, 230, 250],
        variations: [
            { name: "Lavanda Claro", hex: "#F4E1FF", rgb: [244, 225, 255] },
            { name: "Lavanda Escuro", hex: "#967BB6", rgb: [150, 123, 182] },
            { name: "Lavanda Azulada", hex: "#CCCCFF", rgb: [204, 204, 255] },
            { name: "Lavanda Rosa", hex: "#FFF0F5", rgb: [255, 240, 245] },
        ]
    },
    {
        name: "carmesim",
        hex: "#DC143C",
        rgb: [220, 20, 60],
        variations: [
            { name: "Carmesim Claro", hex: "#FF5C5C", rgb: [255, 92, 92] },
            { name: "Carmesim Escuro", hex: "#8B0000", rgb: [139, 0, 0] },
            { name: "Carmesim Rosado", hex: "#FF6F61", rgb: [255, 111, 97] },
            { name: "Carmesim Sangue", hex: "#990000", rgb: [153, 0, 0] },
        ]
    },
    {
        name: "índigo",
        hex: "#4B0082",
        rgb: [75, 0, 130],
        variations: [
            { name: "Índigo Claro", hex: "#8A2BE2", rgb: [138, 43, 226] },
            { name: "Índigo Escuro", hex: "#310062", rgb: [49, 0, 98] },
            { name: "Índigo Azul", hex: "#3F00FF", rgb: [63, 0, 255] },
            { name: "Índigo Violeta", hex: "#8F00FF", rgb: [143, 0, 255] },
        ]
    }
];
