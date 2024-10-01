# Generated by Django 5.0.4 on 2024-09-27 19:17

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotel_app', '0017_remove_checkout_customer_remove_customer_customer_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveField(
            model_name='checkout',
            name='booking',
        ),
        migrations.RemoveField(
            model_name='checkout',
            name='feedback',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='address',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='phone_number',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='user',
        ),
        migrations.AddField(
            model_name='checkout',
            name='customer',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, to='hotel_app.customer'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='customer',
            name='customer',
            field=models.ForeignKey(default='2', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
