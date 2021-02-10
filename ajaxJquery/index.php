<!-- <!DOCTYPE html>
<html>
<head>
<script src="/jquery-5.3.1.min.js"></script>
<script>

</script>
</head>
<body>

<div id="div1"><h2>Let jQuery AJAX Change This Text</h2></div>

<button>Get External Content</button>

</body>
</html> -->

<!DOCTYPE html>
<html>
<head>
<script src="/jquery-3.5.1.min.js">
</script>
</head>
<body>

<script>
    $(document).ready(function() {

        $("button").click(function() {
            // $.get("text.php", function(data, status){
            //     $("#test").html(data);
            //     alert(status);
            // })
            $.ajax({
                url: "text.php",
                sucess: function(data){
                    $(".test").html(data);
                }
            });
        });
    });
</script>
<button>Click me to get data!</button>
<p id="test" class="test"></p>


</body>
</html>
