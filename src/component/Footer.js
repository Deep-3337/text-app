import React from "react";

export default function Footer(props) {
  return (
    <div style={{color : props.mode==='dark'?'white':'black'}}>
      <footer class="page-footer font-small blue">
        <div class="footer-copyright text-center py-3">
          © 2022 Copyright:
          <a href="/"> Jagriti and Deep</a>
        </div>
      </footer>
    </div>
  );
}
