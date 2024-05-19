/* eslint-disable no-undef */
document.addEventListener("DOMContentLoaded", () => {
  const localArray = {
    "北部" : ["臺北市", "新北市", "基隆市", "新竹市", "桃園市", "新竹縣", "宜蘭縣"],
    "中部" : ["臺中市", "苗栗縣", "彰化縣", "南投縣", "雲林縣"],
    "南部" : ["高雄市", "臺南市", "嘉義市", "嘉義縣", "屏東縣", "澎湖縣"],
    "東部" : ["花蓮縣", "臺東縣"],
    "外島" : ["金門縣", "連江縣"],
    "南韓" : ["南楊州市"],
    "中國" : ["重慶市"],
  };

  const cityToTowns = {
    "臺北市": [
      "中正區", "大同區", "中山區", "松山區", "大安區",
      "萬華區", "信義區", "士林區", "北投區", "內湖區",
      "南港區", "文山區",
    ],
    "新北市": [
      "板橋區", "三重區", "中和區", "永和區", "新莊區",
      "新店區", "樹林區", "鶯歌區", "三峽區", "淡水區",
      "汐止區", "瑞芳區", "土城區", "蘆洲區", "五股區",
      "泰山區", "林口區", "深坑區", "石碇區", "坪林區",
      "三芝區", "石門區", "八里區", "平溪區", "雙溪區",
      "貢寮區", "金山區", "萬里區", "烏來區",
    ],
    "基隆市": [
      "仁愛區", "信義區", "中正區", "中山區", "安樂區",
      "暖暖區", "七堵區",
    ],
    "桃園市": [
      "中壢區", "平鎮區", "龍潭區", "楊梅區", "新屋區",
      "觀音區", "桃園區", "龜山區", "八德區", "大溪區",
      "復興區", "大園區", "蘆竹區",
    ],
    "新竹市": [
      "東區", "北區", "香山區",
    ],
    "新竹縣": [
      "竹北市", "竹東鎮", "新埔鎮", "關西鎮", "湖口鄉",
      "新豐鄉", "芎林鄉", "橫山鄉", "北埔鄉", "寶山鄉",
      "峨眉鄉", "尖石鄉", "五峰鄉",
    ],
    "宜蘭縣": [
      "宜蘭市", "羅東鎮", "蘇澳鎮", "頭城鎮", "礁溪鄉",
      "壯圍鄉", "員山鄉", "冬山鄉", "五結鄉", "三星鄉",
      "大同鄉", "南澳鄉",
    ],
    "臺中市": [
      "中區", "東區", "南區", "西區", "北區",
      "北屯區", "西屯區", "南屯區", "太平區", "大里區",
      "霧峰區", "烏日區", "豐原區", "后里區", "石岡區",
      "東勢區", "和平區", "新社區", "潭子區", "大雅區",
      "神岡區", "大肚區", "沙鹿區", "龍井區", "梧棲區",
      "清水區", "大甲區", "外埔區", "大安區",
    ],
    "苗栗縣": [
      "苗栗市", "頭份市", "竹南鎮", "後龍鎮", "通霄鎮",
      "苑裡鎮", "卓蘭鎮", "造橋鄉", "西湖鄉", "頭屋鄉",
      "公館鄉", "銅鑼鄉", "三義鄉", "大湖鄉", "獅潭鄉",
      "泰安鄉",
    ],
    "彰化縣": [
      "彰化市", "員林市", "和美鎮", "鹿港鎮", "溪湖鎮",
      "二林鎮", "田中鎮", "北斗鎮", "花壇鄉", "芬園鄉",
      "大村鄉", "永靖鄉", "伸港鄉", "線西鄉", "福興鄉",
      "秀水鄉", "埔心鄉", "埔鹽鄉", "大城鄉", "芳苑鄉",
      "竹塘鄉", "社頭鄉", "二水鄉", "田尾鄉", "埤頭鄉",
      "溪州鄉",
    ],
    "南投縣": [
      "南投市", "埔里鎮", "草屯鎮", "竹山鎮", "集集鎮",
      "名間鄉", "鹿谷鄉", "中寮鄉", "魚池鄉", "國姓鄉",
      "水里鄉", "信義鄉", "仁愛鄉",
    ],
    "雲林縣": [
      "斗六市", "斗南鎮", "虎尾鎮", "西螺鎮", "土庫鎮",
      "北港鎮", "古坑鄉", "大埤鄉", "莿桐鄉", "林內鄉",
      "二崙鄉", "崙背鄉", "麥寮鄉", "東勢鄉", "褒忠鄉",
      "臺西鄉", "元長鄉", "四湖鄉", "口湖鄉", "水林鄉",
    ],
    "嘉義市": [
      "東區", "西區",
    ],
    "嘉義縣": [
      "番路鄉", "梅山鄉", "竹崎鄉", "阿里山鄉", "中埔鄉",
      "大埔鄉", "水上鄉", "鹿草鄉", "太保市", "朴子市",
      "東石鄉", "六腳鄉", "新港鄉", "民雄鄉", "大林鎮",
      "溪口鄉", "義竹鄉", "布袋鎮",
    ],
    "臺南市": [
      "中西區", "東區", "南區", "北區", "安平區",
      "安南區", "永康區", "歸仁區", "新化區", "左鎮區",
      "玉井區", "楠西區", "南化區", "仁德區", "關廟區",
      "龍崎區", "官田區", "麻豆區", "佳里區", "西港區",
      "七股區", "將軍區", "學甲區", "北門區", "新營區",
      "後壁區", "白河區", "東山區", "六甲區", "下營區",
      "柳營區", "鹽水區", "善化區", "大內區", "山上區",
      "新市區", "安定區",
    ],
    "高雄市": [
      "新興區", "前金區", "苓雅區", "鹽埕區", "鼓山區",
      "旗津區", "前鎮區", "三民區", "楠梓區", "小港區",
      "左營區", "仁武區", "大社區", "岡山區", "路竹區",
      "阿蓮區", "田寮區", "燕巢區", "橋頭區", "梓官區",
      "彌陀區", "永安區", "湖內區", "鳳山區", "大寮區",
      "林園區", "鳥松區", "大樹區", "旗山區", "美濃區",
      "六龜區", "內門區", "杉林區", "甲仙區", "桃源區",
      "那瑪夏區", "茂林區", "茄萣區",
    ],
    "屏東縣": [
      "屏東市", "潮州鎮", "東港鎮", "恆春鎮", "萬丹鄉",
      "長治鄉", "麟洛鄉", "九如鄉", "里港鄉", "鹽埔鄉",
      "高樹鄉", "萬巒鄉", "內埔鄉", "竹田鄉", "新埤鄉",
      "枋寮鄉", "新園鄉", "崁頂鄉", "林邊鄉", "南州鄉",
      "佳冬鄉", "琉球鄉", "車城鄉", "滿州鄉", "枋山鄉",
      "三地門鄉", "霧台鄉", "瑪家鄉", "泰武鄉", "來義鄉",
      "春日鄉", "獅子鄉", "牡丹鄉",
    ],
    "臺東縣": [
      "臺東市", "成功鎮", "關山鎮", "卑南鄉", "鹿野鄉",
      "池上鄉", "東河鄉", "長濱鄉", "太麻里鄉", "大武鄉",
      "綠島鄉", "海端鄉", "延平鄉", "金峰鄉", "達仁鄉",
      "蘭嶼鄉",
    ],
    "花蓮縣": [
      "花蓮市", "鳳林鎮", "玉里鎮", "新城鄉", "吉安鄉",
      "壽豐鄉", "光復鄉", "豐濱鄉", "瑞穗鄉", "富里鄉",
      "秀林鄉", "萬榮鄉", "卓溪鄉",
    ],
    "澎湖縣": [
      "馬公市", "西嶼鄉", "望安鄉", "七美鄉", "白沙鄉",
      "湖西鄉",
    ],
    "金門縣": [
      "金沙鎮", "金湖鎮", "金寧鄉", "金城鎮", "烈嶼鄉",
      "烏坵鄉",
    ],
    "連江縣": [
      "南竿鄉", "北竿鄉", "莒光鄉", "東引鄉",
    ],
    "南楊州市" : ["和道邑"],
    "重慶市"  : ["北碚區"],
  };


  const SelectWrapper = document.querySelector(".select-wrapper");
  const localSelect = SelectWrapper.querySelector(".current-local");
  const localItems = SelectWrapper.querySelector(".local");
  const CitySelect = SelectWrapper.querySelector(".current-city");
  const CityItems = SelectWrapper.querySelector(".city");
  const TownSelect = SelectWrapper.querySelector(".current-town");
  const TownItems = SelectWrapper.querySelector(".town");
  const LocationWrapper = document.querySelector(".location");

  // 下拉選單點擊事件
  LocationWrapper.addEventListener("click", function() {
    const ArrowSpan = this.querySelector(".selected-btn");
    if (ArrowSpan.textContent.trim() === "keyboard_arrow_up")
      ArrowSpan.textContent = "keyboard_arrow_down";
    else
      ArrowSpan.textContent = "keyboard_arrow_up";
    SelectWrapper.classList.toggle("select-show");
  });


  // 選擇事件監聽器，選擇選項時觸發
  const addSelectEvent = (itemsContainer, selectElement) => {
    itemsContainer.addEventListener("click", (event) => {
    // 確保點擊的是div
      if (event.target.tagName === "DIV") {
      // 取得選擇的文本
        const selectedText = event.target.textContent;
        // 更新選擇框中的文本
        selectElement.textContent = selectedText;

        // 移除所有選項選中狀態
        itemsContainer.querySelectorAll("div").forEach(div => div.classList.remove("same-as-selected"));
        // 新增選中狀態到點擊的選項
        event.target.classList.add("same-as-selected");
      }
    });
  };

  localItems.addEventListener("click", (event) => {
    if (event.target.tagName === "DIV") {
      const selectedLocal = event.target.textContent;
      localSelect.textContent = selectedLocal;

      // Update city items
      CityItems.innerHTML = "";
      localArray[selectedLocal].forEach(city => {
        const div = document.createElement("div");
        div.textContent = city;
        CityItems.appendChild(div);
      });

      TownItems.innerHTML = "";
    }
  });

  CityItems.addEventListener("click", (event) => {
    if (event.target.tagName === "DIV") {
      const selectedCity = event.target.textContent;
      CitySelect.textContent = selectedCity;

      // Update town items
      TownItems.innerHTML = "";
      const towns = cityToTowns[selectedCity] || [];
      towns.forEach(town => {
        const div = document.createElement("div");
        div.textContent = town;
        TownItems.appendChild(div);
      });

      TownSelect.textContent = "town";
    }
  });

  addSelectEvent(localItems, localSelect);
  addSelectEvent(CityItems, CitySelect);
  addSelectEvent(TownItems, TownSelect);

  TownItems.addEventListener("click", (event) => {
    if (event.target.tagName === "DIV") {
      const selectedTown = event.target.textContent;
      TownSelect.textContent = selectedTown;

      // 將選中的city、town設定為目前city、town
      document.querySelector(".current-city").textContent = CitySelect.textContent;
      document.querySelector(".current-town").textContent = selectedTown;
    }
  });
});
