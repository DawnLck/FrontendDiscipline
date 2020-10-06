/**
 * DomDiff_React
 * MVVM 模式框架的核心算法
 * 使得vm最终变为 dom 操作
 * 《React源码剖析系列--不可思议的react diff》
 * */

/**
 * 注意一：web中跨层级的DOM操作比较少（如果有，同样遵循同级比较的原则，不存在就删除，新增了就创建）
 * 注意二：拥有相同类的两个组件会生成相似的树状结构
 * 注意三：对于同一层级的一组子节点，它们可以通过唯一id进行区分
 * */

/**
 * Dom 操作的几种类别
 * DOM_Create，DOM_Delete (DOM 的移动操作也可以通过 delete A -> create A 实现)
 * */

/**
 * Tree diff
 * 按照层级进行比较
 * 对相同层级的DOM节点进行比较
 * 如果节点不存在，该节点以及其子节点都会被完全删除掉
 * */

/**
 * Component diff
 * 判断组件的类型
 * 如果是同一类型的组件，则按照原策略继续比较virtual DOM tree，因为很可能整个组件都未发生变化，所以React允许用户通过shouldComponentUpdate()来判断组件是否需要更新
 * 如果组件类型不同，则将该组件判断为Dirty component，从而替换整个组件下的所有节点
 * */

/**
 * Element diff
 * React 提供了三种节点操作，分别为INSERT、MOVE 和 REMOVE操作
 * 其中INSERT 和 REMOVE 操作都属于基础的粒子性操作
 * MOVE 的目标是：当子节点只是发生了位置的改变，其他并没有改变时，进行元素的复用，避免没有意义的创建和移除
 * */

let queue = [];
function insert(Node, toIndex){
  queue.push(Node, null, toIndex);
}

function move(Node, fromIndex, toIndex){
  queue.push(Node, fromIndex, toIndex);
}

function remove(Node, fromIndex){
  queue.push(Node, fromIndex, null);
}

function diffChildren(newChildren, oldChildren){
  oldChildren.forEach((child, index) => {
    let newChild = newChildren[index];
    if(newChild === child){
      //节点相同，判断MOVE 移动操作,如果位置被挪到后面了就移动，否则会自然而然的被挪到前面，这样保证了整个队列的序
      if(child._mountIndex < newChild.lastIndex){
        //todo Move
      }else{
        //todo nothing
      }
    }else{

    }
    simpleDiff(newChild, child); //确保能递归回来
  })
}

/**
 * 其他
 * */
// 原生的插入节点的代码
function insertAfter(newElement,targetElement){
  var parent = targetElement.parentNode;
  if(parent.lastChild === targetElement){
    parent.appendChild(newElement);
  }else{
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}
