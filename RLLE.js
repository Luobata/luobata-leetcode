/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var removeElements = function(head, val) {
    var find = function (dom, next, val) {
        if (next && next.val === val) {
            dom.next = next.next;
            find(dom, next.next, val);
        } else if (next && next.next) {
            find(next, next.next, val);
        }
    };
    while (head && head.val === val) {
        head = head.next;
    }
    if (head && head.next) find(head, head.next, val);
    return head;
};
removeElements(null, 1);
