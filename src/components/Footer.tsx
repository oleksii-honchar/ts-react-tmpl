import { css } from "@emotion/react";
import { ReactElement } from "react";
import moment from "moment";

import { Icon } from "src/components/Icon.tsx";

export function Footer(): ReactElement {
  const elCss = css`
    border-top: 1px solid lightgrey;
    padding-top: 5px;
    padding-bottom: 5px;
    table {
      width: 100%;
    }
  `;

  return (
    <div css={elCss}>
      <table>
        <tbody>
          <tr>
            <td className="d-flex justify-content-between">
              <div>
                <Icon name="copyright" />
                &nbsp;
                {moment().format("YYYY")}&nbsp;
                <span className="name">Oleksii Honchar</span>
                <span className="sub-title">&nbsp;- Full-cycle Software Engineer (v2020031315)</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
