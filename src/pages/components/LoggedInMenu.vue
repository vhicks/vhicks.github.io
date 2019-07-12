<template>
    <div>
        <li class="nav-item"><router-link to="/main" class="nav-link">
            <i class="now-ui-icons business_bulb-63"></i> Features</router-link>
        </li>
        <li class="nav-item"><router-link to="/login" class="nav-link">
            <i class="now-ui-icons users_circle-08"></i> Login</router-link>
        </li>
    </div>
</template>
<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink, FormGroupInput } from '@/components';

export default {
    components: {
        DropDown,
        [FormGroupInput.name]: FormGroupInput,
        Navbar,
        NavbarToggleButton,
        NavLink,
        [Popover.name]: Popover
    }
}
</script>
<style></style>
