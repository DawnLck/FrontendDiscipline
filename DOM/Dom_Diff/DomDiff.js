/**
 * DomDiff
 * MVVM 模式框架的核心算法
 * 使得vm最终变为 dom 操作
 * */

/**
 * 简单的diff算法
 * 逐个遍历 newVdom 的节点，找到它在oldVdom中的位置，如果找到了就移动对应的DOM元素，如果没找到说明是新增节点，则新建一个节点插入。遍历完成之后如果oldVdom中还有没处理过的节点，则说明这些节点在newVdom中被删除了，删除它们即可。
 仔细思考一下，几乎每一步都要做移动DOM的操作，这在DOM整体结构变化不大时的开销是很大的，实际上DOM变化不大的情况现实中经常发生，很多时候我们只需要变更某个节点的文本而已。
 * */

/**
 * 注意一：web中跨层级的DOM操作比较少
 * 注意二：拥有相同类的两个组件会生成相似的树状结构
 * 注意三：对于同一层级的一组子节点，它们可以通过唯一id进行区分
 * */

let newTree = {},
  oldTree = {};

//diff模块
function diffText(newNode, oldNode){}
function diffAttr(newNode, oldNode){}
function diffChildren(newChildren, oldChildren){
  oldChildren.forEach((child, index) => {
    let newChild = newChildren[index];
    simpleDiff(newChild, child); //确保能递归回来
  })
}

//简单diff算法
function simpleDiff(newNode, oldNode){
  if(newNode === null || newNode === undefined){
    //oldNode被remove掉了，所以newNode找不到
    // do something
  }
  else if(diffText(newNode, oldNode)){
    //比较文本上的差异
    //do something
  }else if(diffAttr(newNode, oldNode)){
    //do something
  }else{
    //比较Attr上的差异
  }
  diffChildren(newNode.children, oldNode.children);
}

simpleDiff(newTree, oldTree);
