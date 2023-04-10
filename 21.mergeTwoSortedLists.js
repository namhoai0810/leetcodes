/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// phuong phap giai khi nao 1 trong 2 list o vi tri null thi dung lai
// dung cach de quy khi gia tri hien tai o list 1 <= vi tri hien tai o list 2
// ===> tra ve so tai vi tri list 1
//===> list 1 nhay den so tiep theo goi lai ham de so sanh voi vi tri cua list 2
// ==> neu ma vi tri o list 1 > list 2 ra ve vi tri o list 2 va nhay den vi tri tiep theo trong list 2
// thuc hien den khi 1 trong 2 list nhay den vi tri null tra ve vi tri cuoi cung cua list con lai
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
