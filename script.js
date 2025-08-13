const app = new Vue({
  el: "#app", // Vueが管理する一番外側のDOM要素
  vuetify: new Vuetify(),
  data: {
    Date: "", //パラメーター「ID」格納変数
    Inout: "", //パラメーター「Name」格納変数
    selected: "", //パラメーター「Name」格納変数
    Amount: "", //パラメーター「Name」格納変数
    dataList: [], // データ表示用配列
    snackbar: false,     
    snackbarMessage: '',   
    dialog: false,       
    dialogMessage: '' 

  },
  methods: {
    // DBにデータを追加する関数
    addData: async function () {
      //IDの入力チェック（空白か数字以外なら終了）
      if (!this.Date || !this.Amount) {
        console.log("IDに数値が入力されていません");
        return;
      }

      //POSTメソッドで送るパラメーターを作成
      const param = {
        Date: this.Date,
        Inout: this.Inout,
        Category: this.selected,
        Amount: this.Amount
      };

      //INSERT用のAPIを呼び出し
      const response = await axios.post(
        "https://m3h-rintarootsuka-0730.azurewebsites.net/api/insert",
        param
      );
console.log(param);
      //結果をコンソールに出力
    },
    // データベースからデータを取得する関数
    readData: async function () {
      //SELECT用のAPIを呼び出し
      const response = await axios.get(
        "https://m3h-rintarootsuka-0730.azurewebsites.net/api/SELECT?"
      );

      //結果をコンソールに出力
      console.log(response.data);

      //結果リストを表示用配列に代入
      this.dataList = response.data.List;
    },
    // データベースからデータを取得する関数
    readIncomeData: async function () {
      //SELECT用のAPIを呼び出し
      const response = await axios.get(
        "https://m3h-rintarootsuka-0730.azurewebsites.net/api/SELECTINCOME?"
      );

      //結果をコンソールに出力
      console.log(response.data.List[0]);
      console.log(response.data.List[0].Id);

      //結果リストを表示用配列に代入
      this.dataList = response.data.List;
    },
    // データベースからデータを取得する関数
    readOutcomeData: async function () {
      //SELECT用のAPIを呼び出し
      const response = await axios.get(
        "https://m3h-rintarootsuka-0730.azurewebsites.net/api/SELECTOUTCOME?"
      );

      //結果をコンソールに出力
      console.log(response.data.List[0].Id);

      //結果リストを表示用配列に代入
      this.dataList = response.data.List;
    }
  }
});
