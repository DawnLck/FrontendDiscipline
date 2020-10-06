/**
 * 给出如下虚拟dom的数据结构，如何实现简单的虚拟dom，渲染到目标dom树
 * */
//样例数据
let demoNode = ({
  tagName: 'ul',
  props: {'class': 'list'},
  children: [
    ({tagName: 'li', children: ['douyin']}),
    ({tagName: 'li', children: ['toutiao']})
  ]
});
//构建一个render函数，将demoNode对象渲染为以下dom
/**
 * 渲染结果
 * <ul class="list">
 *   <li>douyin</li>
 *   <li>toutiao</li>
 * </ul>
 */

/**
 * @param node
 * @return {string}
 * */
function RenderNode(node) {
  let result='';
  if(typeof node === 'string'){
    result += node;
  } else if(Array.isArray(node)){
    node.forEach(item => {
      result += RenderNode(item);
    });
  }else{
    let tag = node.tagName || 'div';
    let props = '';
    if (node.props) {
      let nodeProps = node.props;
      for (let key in nodeProps) {
        props += (` ${key}="${nodeProps[key]}"`);
      }
    }
    if(node.children && node.children.length){
      result = `<${tag + props}>${RenderNode(node.children)}</${tag}>`;
    }
  }
  return result;
}

let renderHTML = RenderNode(demoNode);
console.log(renderHTML);
let main = document.getElementById('main');
main.innerHTML = renderHTML;
