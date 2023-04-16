// Bai tap xoa cac phan tu giong nhau trong list va sap xep lai tu duoi len
// neu list = null tra ve list
// While list != null
// Neu gia tri ht == gia tri tiep theo
// gia tri tiep theo nhay len 1 gia tri nua
// neu khac nhau thi them vao list moi

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head == null || head.next == null) return head;
  let curr = head;
  while (curr != null && curr.next != null) {
    if (curr.val == curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
};
