from django.contrib.auth import authenticate
from rest_framework import serializers
from .models import CustomUser

class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        # Authenticate using the email as the username
        user = authenticate(username=email, password=password)
        if user is None:
            raise serializers.ValidationError('Invalid Credentials')
        return attrs



