/**
 <ul>
  <li>op1: 001</li>
  <li>op2: 002</li>
  <li>op3: 003</li>
  <li>op4: 004</li>
  <li>op5:
    <ul>
      <li>op6: 011</li>
      <li>op7: 012</li>
      <li>op10:
        <ul>
          <li>op11: 101</li>
          <li>op12: 101</li>
          <li>op14:
            <ul>
              <li>op15: 101</li>
              <li>op16: 101</li>
              <li>op17: 101</li>
            </ul>
          </li>
          <li>op13: 101</li>
        </ul>
      </li>
      <li>op8: 013</li>
      <li>op9: 014</li>
    </ul>
  </li>
</ul>
 */

export const menuData = {
    op1: { value: "001" },
    op2: { value: "002" },
    op3: { value: "003" },
    op4: { value: "004" },
    op5: {
        op6: { value: "011" },
        op7: { value: "012" },
        op10: {
            op11: { value: "101" },
            op12: { value: "101" },
            op14: {
                op15: { value: "101" },
                op16: { value: "101" },
                op17: { value: "101" }
            },
            op13: { value: "101" }
        },
        op8: { value: "013" },
        op9: { value: "014" }
    }
}
