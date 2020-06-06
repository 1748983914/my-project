<%--
  Created by IntelliJ IDEA.
  User: 17489
  Date: 2019/7/10
  Time: 12:11
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>

</head>
<body>
<!--sidder-->
<nav class="col-md-2 d-none d-md-block bg-light sidebar" id="sidder">
    <div class="sidebar-sticky">
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link active"
                   href="${pageContext.request.contextPath}/toCourse" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    课程管理 <span class="sr-only">(current)</span>
                </a>
            </li>

        </ul>
    </div>
</nav>
</body>
</html>
