package com.addition;

import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

public class addServlet extends HttpServlet {
    protected void service(HttpServletRequest req, HttpServletResponse res) throws IOException {
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();

        try {
            int a = Integer.parseInt(req.getParameter("num1"));
            int b = Integer.parseInt(req.getParameter("num2"));
            int sum = a + b;

            System.out.println(sum);

            out.println("<html><body>");
            out.println("<h1>Sum: " + sum + "</h1>");
            out.println("</body></html>");
        } catch (NumberFormatException e) {
            out.println("<html><body>");
            out.println("<h1>Invalid input. Please enter valid numbers.</h1>");
            out.println("</body></html>");
        } finally {
            out.close();
        }
    }
}
