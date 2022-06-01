<script>
export let username = document.getElementById("username");


</script>

<form method="POST" action="/api/registeruser">
    <label for="username">Username:</label>
    <input id="username" placeholder="username" name="username" value="Test">

    <button type="submit">Register</button>
</form>

<style>

</style>