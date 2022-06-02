/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
 
function TodoItem( {item} ) {
  var a ;
  const handle = (e) =>{
    let check = e.target.checked;
    if (check == true){
      document.getElementById(item.key).classList.add("has-text-grey-light");

    }
    else{
    document.getElementById(item.key).classList.remove("has-text-grey-light");

    }
  
  }
  return (
   
    <label className="panel-block " id ={item.key}>
      <input type="checkbox"  onClick={handle} />
      {item.text}
    </label>
  );
}

export default TodoItem;